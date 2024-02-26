import { createProduct, deleteProduct, getAllProducts } from "@/prisma/product";
import { NextResponse } from "next/server"

export async function handler(req) {

   try {
      switch (req.method) {
         case 'POST': {
            const {title, image, category, price} = req.body;
            const new_product = await createProduct({title, image, category, price});
            return new NextResponse({
              status: 201,
              body: new_product,
            });
            console.log(new_product);
         }

         case 'GET' : {
            const products = await getAllProducts();
            return new NextResponse({
              status: 200,
              body: products,
            });
         }

         case 'DELETE' : {
            const {id} = req.params;
            await deleteProduct(id);
            return new NextResponse({
              status: 200,
              body: {message: "Product deleted successfully"},
            });
         }

         default:
            break;
      }
   } catch (error) {
      return new NextResponse({
        status: 500,
        body: {message: "Server Error"},
      });
   }

}

export {handler as POST, handler as GET, handler as PUT, handler as DELETE}
