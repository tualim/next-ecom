"use server";

import { createCart, getCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function setProductQuantity(productId: string, quantity: number) {
  const cart = (await getCart()) ?? (await createCart());
  const articleInCart = cart.items.find((item) => item.productId === productId);

  if (quantity === 0) {
    if (articleInCart) {
      //update timestamp too not just delete like below
      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          items: {
            delete: { id: articleInCart.id },
          },
        },
      });

      // await prisma.cartItem.delete({
      //   where: { id: articleInCart.id },
      // });
    }
  } else {
    if (articleInCart) {
      //update timestamp too not just update like below
      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          items: {
            update: {
              where: { id: articleInCart.id },
              data: { quantity },
            },
          },
        },
      });

      // await prisma.cartItem.update({
      //   where: { id: articleInCart.id },
      //   data: { quantity },
      // });
    } else {
      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          items: {
            create: {
              productId,
              quantity,
            },
          },
        },
      });

      // await prisma.cartItem.create({
      //   data: {
      //     cartId: cart.id,
      //     productId,
      //     quantity,
      //   },
      // });
    }
  }

  revalidatePath("/cart");
}
