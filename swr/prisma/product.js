import { PrismaClient } from '@prisma/client/edge'

const prisma = new PrismaClient()
export const createProduct = async (title, price, category, image) => {
   const product = await prisma.product.create({
      data: {
         image,
         title,
         price,
         category
      }
   });
   return product
}

export const getAllProducts = async () => {
   const products = await prisma.product.findMany();
   return products
}

export const deleteProduct = async ({id}) => {
   await prisma.product.delete({
      where: {
         id: id
      }
   })
}