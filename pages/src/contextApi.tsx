import { log } from 'console';
import { setPriority, type } from 'os';
import React, { createContext,useState ,useEffect} from 'react';
import productsListArr from './component/arrProduct'

type productType = {
    productName:string,
    productPrice: number,
    productImg:string
}
type productTypeChos = {
    productName:string,
    productPrice: number,
    productImg:string,
    cunt:number
}
type Purchase = {
    fullName:string,
    mail:string,
    phonNumber:string,
    adress:string,
    listProduct:any,
    price:number
}
type ContextProviderProps={
    children: React.ReactNode
}

type CreateType = {
    addUser: (name:string,password:string,email:string)=>void,
    signIn: (name:string,password:string)=>void,
    search: (value:string)=>void,
    addProductCho: (num:number)=>void,
    deleteProductChos:(ind:number)=>void,
    buyNow:(arr:Purchase)=>void,
    products:productType[],
    choseProduct:productTypeChos[],
    listPurchase:Purchase[],
    userConect:userType,
    productsNow:any
}

export const AllData = createContext<CreateType | null>(null)
type userType ={
    name:string,
    email:string,
    password:string,
    arrOrder:[],
}

export const Data1 = ({children}:ContextProviderProps)=>{
    const [listPurchase,setListPurchase]= useState<Purchase[]>([])
    const [userConect,setUserConect] = useState<userType>({name:'',email:'',password:'',arrOrder:[]})
    const [products,setProducts]=useState<productType[]>([])
    const [choseProduct,setChoseProduct]=useState<productTypeChos[]>([])
    const [productsNow, setProductsNow] = useState<any>()
    const [flag1,setFlag1]=useState<boolean>(true)

    useEffect(()=>{
        fetch('/allproduct')
        .then(res=>res.json())
        .then((data)=>{
            setProducts(data)
        })
    },[flag1])

    const addUser = async (name:string,password:string,email:string) =>{
        let bulian = false
        await fetch('http://localhost:3001/signUp',{
            headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
            method:'post',
            body:JSON.stringify({
                name,
                password,
                email
            })
          })
          .then(res=>res.json())
          .then((data)=>{
            if(data == false){
                bulian = data
            }
            else{
                bulian = true
                setUserConect(data)
            }
          })
          .catch((e)=>{
            console.log(e);    
          })
        return bulian
    }

    const signIn = async (name:string,password:string)=>{
        let bulian = false
        await fetch('http://localhost:3001//signIn',{
            headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
            method:'post',
            body:JSON.stringify({
                name,
                password
            })
          })
          .then(res=>res.json())
          .then((data)=>{
            if(data == false){
                bulian = data
            }
            else{
                bulian = true
                setUserConect(data)
            }
          })
          .catch((e)=>{
            console.log(e);    
          })
        return bulian
    }
    


    const search =  (value:string)=>{
        let arr = productsListArr.filter( val => val.productName.toLowerCase().indexOf(value.toLowerCase()) != -1)
        setProducts(arr)
    }

    const addProductCho = (num:number)=>{
        let exists =  choseProduct.some(val=> val.productName == products[num].productName && products[num].productPrice == val.productPrice)
        console.log(exists);
        if(exists == false){
            let product:productTypeChos = {
                productName: products[num].productName,
                productPrice: products[num].productPrice,
                productImg: products[num].productImg,
                cunt: 1
            }
            setChoseProduct([...choseProduct,product])
        }
        else{
            choseProduct.forEach((val)=>{
                if(val.productName == products[num].productName && products[num].productPrice == val.productPrice){
                    val.cunt++
                }
            })
            setChoseProduct([...choseProduct])
        }


    }

    const deleteProductChos = (ind:number)=>{

        let arr:productTypeChos[] = choseProduct
        if(arr[ind].cunt > 1){
            arr[ind].cunt--
        }
        else{
            arr.splice(ind,1)
        }
        setChoseProduct([...arr])
    }
    
    const buyNow = async (arr:Purchase) =>{
        let bulian = false
        console.log(arr);
        await fetch('/newOrder',{
            headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
            method:'post',
            body: JSON.stringify({
                fullName: arr.fullName,
                mail: arr.mail,
                phonNumber: arr.phonNumber,
                adress: arr.adress,
                listProduct: arr.listProduct,
                price: arr.price,
                password:userConect.password,
                name:userConect.name
            })
          })
          .then(res=>res.json())
          .then((data)=>{
            if(data == true){
                bulian = data
            }
            else{
                bulian = true
                setUserConect(data)
            }
          })
          .catch((e)=>{
            console.log(e);    
          })
          await setProductsNow(arr)
          setChoseProduct([])        
        return bulian
    }


    return(
        <AllData.Provider value={{buyNow,deleteProductChos,addProductCho,search,addUser,signIn,products,choseProduct,userConect,listPurchase,productsNow}}>{children}</AllData.Provider>
    )
}
