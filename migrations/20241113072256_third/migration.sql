/*
  Warnings:

  - You are about to drop the column `isAdmin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Basket` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('CANCELLED', 'PREPARING', 'DELIVERING', 'COMPLETED');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isAdmin",
DROP COLUMN "name",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ALTER COLUMN "lastLogin" DROP NOT NULL;

-- DropTable
DROP TABLE "Basket";

-- DropTable
DROP TABLE "Item";

-- DropTable
DROP TABLE "Order";

-- CreateTable
CREATE TABLE "UserContactInfo" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "addressFirst" TEXT NOT NULL,
    "addressCity" TEXT NOT NULL,
    "addressPostcode" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "UserContactInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "imagePath" TEXT,
    "priceInPence" INTEGER NOT NULL,
    "discountInPence" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "isPublished" BOOLEAN,
    "isAvailable" BOOLEAN,
    "isFeatured" BOOLEAN,
    "isDiscount" BOOLEAN,
    "isMealDeal" BOOLEAN,
    "isCustomise" BOOLEAN,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderHistory" (
    "id" SERIAL NOT NULL,
    "totalPriceInPence" INTEGER NOT NULL,
    "notes" TEXT NOT NULL,
    "basket" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "status" "Status" DEFAULT 'PREPARING',
    "userId" INTEGER NOT NULL,

    CONSTRAINT "OrderHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserContactInfo_userId_key" ON "UserContactInfo"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "OrderHistory_userId_key" ON "OrderHistory"("userId");

-- AddForeignKey
ALTER TABLE "UserContactInfo" ADD CONSTRAINT "UserContactInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderHistory" ADD CONSTRAINT "OrderHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
