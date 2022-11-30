import { useEffect, useState } from "react"

const useSeller = email =>{
     const [isSeller, setIsSeller] = useState(true)
     const [isSellerloading, setIsSellerLoading] = useState(true)

     useEffect(()=>{
          fetch(`http://localhost:5000/users/seller/${email}`)
          .then(res => res.json())
          .then(data=>{
               console.log('seller data',data)
               setIsSeller(data.isSeller)
               setIsSellerLoading(false)
          })

     },[email])
     return [isSeller, isSellerloading]
}

export default useSeller;