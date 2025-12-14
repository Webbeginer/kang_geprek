
import { retriveData } from "@/Service/firebase";
import { NextRequest, NextResponse } from "next/server";






export async function GET(request: NextRequest) {
    const data= await retriveData("products");
    const id= request.nextUrl.searchParams.get("id");
    if(id){
        const product = data.find((item) => item.id === (id));
        if(!product){
            return NextResponse.json({status: 404, message: "product not found"});
        }
        return NextResponse.json({status: 200, message: "success", data: product});
    }
    
    return NextResponse.json({status: 200, message: "success", data});
}