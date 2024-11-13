/*
  Warnings:

  - You are about to drop the column `orderId` on the `Basket` table. All the data in the column will be lost.
  - You are about to drop the column `basketId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Basket" DROP CONSTRAINT "Basket_orderId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_basketId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- AlterTable
ALTER TABLE "Basket" DROP COLUMN "orderId";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "basketId";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "userId";
