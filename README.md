# Project - Ecommerce Little Johns Takeaway

## Objective Summary

The objective of this project is to build a Full-Stack web-application with payments that enables users to order fast-food. The design of the site will take inspiration a well-known takeaway franchise website, Big Johns.

This app will be able to handle multiple users with secure account creation and authorization. There will be a secure payment system with order confirmations sent to the user, and order history stored on users account.

## Requirements

#### User accounts:

- User details.
- Order history.
- Payment history.
- Saved payment method.
- Account Deletion.
- Authentication.

#### Admin accounts:

- Admin details.
- Order search.
- Payment search.
- Refund action.
- Product search.
- Product create/delete.
- User account management. (CRUD)
- User contact. (email)
- Authentication.

## Process

1.  Cleanup & Install dependencies. (Tailwind, Radix, etc...)
2.  Create draft of site, hardcoding data temporarily.
3.  Add Database & Schemas for Users.
4.  Create Admin Tools & Admin Authentication/Authorization JWT & BCrypt.
5.  Create User Pages & User Authentication/Authorization using Auth0.
6.  Create Basket & Checkout components ready for Payment Process.
7.  Integrate Stripe into application, server/client side payments.
8.  Testing & debug.

## Method

1.  Installed Next.js with Tailwind & TypeScript. I installed React-Icons for the sites various icons & component library Shadcn for user interactivity.
2.  Used Shadcn for main page carousel, added hardcoded pages for Main, SignIn/Register, Account, Order Page, Menu, Store Selectors, etc...

## Todo

- ~~Build Carousel, link BigJohns images.~~
- ~~Build Store Finder form component.~~
- ~~Build Promo images component.~~
- ~~Build SignIn/Register Page Template.~~
- ~~Build Account Page.~~
- Build Store Selectors Page.
- Build Order/Checkout Page.
- Build Menu Page.
- ~~Build notFound Page.~~
- Handle errors Page.
- Conditions Page.
- Redirects.
- Link StoreFinder to StoreFinder Page via StoreFinder component.
- Handle Account Actions (CRUD), Address, Wallet, choose address, etc...
