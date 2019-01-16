# workflow

workflow rpn

### Install

```bash
npm install
```

### Devlopment, test and Build

```bash
npm start
npm test
npm run build
```

### Commands for Ghoti-CLI structure

```bash
npm run component [component name]
npm run page [page name]
npm run lambda [lambda name]
npm run func [function name]
npm run feature [feature name]
npm run hint
```

> Created by [Ghoti-CLI](https://github.com/WMXPY/Ghoti-CLI/) 3.5.1

### 1.0.0

Finally, the basic function for workflow website is done. Successfully connect with back-end, IOS and Android.

### 1.0.1

Fixed some bugs in editpage:
1. Add color for tax button
2. Export different json file for different stage
3. Add number and description on picture

### 1.0.2

Main:
1. show users in list

AddTask:
1. selectable user name

### 1.0.3

Login page changed using bootstrap in scss
Part of editpage modified

### 1.0.4

New Function Add:
1. Delete User
2. Delete Task
Change stage display in main page

### 1.0.5

1. Due Date fixed
2. console log removed
3. stage display changed to 4 stage
4. import description fixed

### 1.0.6

1. Sort by DueDate
2. Default stage fixed
3. Add stagefield in editpage
4. number input fixed
5. Add tax field

### 1.0.7

1. Show error message when wrong username or password
2. Change the way of changing stage in editpage
3. Slightly change the background color in editpage

### 1.0.8

1. Automatically calculate tax and total
2. Fixed show user for each stage
3. Add status for each task

### 1.1.0

1. Changed the organization of show picture in edittask
2. fixed tax calculate

### 1.1.1

1. Changed main page view
2. Add search task by stage
3. Add partial ordertask

### 1.1.2

1. Fixed json name in tax, cost, qty, PPU
2. Fixed calculation prblem in tax, cost, qty, PPU
3. Able to import json from invoice with default unknown category

### 1.1.3

1. Able to import HTML without pictures
2. Fixed show user for task in main

### 1.1.4

1. Working on beautify editpage(1)

### 1.1.5

1. Working on beautify editpage(2)

### 1.1.6

1. Working on beautify editpage(3)
2. Fixed taxable change tax bug

### 1.1.7

1. Working on beautify editpage(4)

## 1.1.8

1. Working on ordertask(2)

### 1.1.9

1. Add client

### 1.1.10

1. Fixed upload image order

### 1.2.0

1. Working on ordertask DONE!

### 1.2.1

1. Fixed sort by duedate
2. Add background to register and userprofile
3. Add authority different to client
4. Add Wells Fargo icon before address

### 1.2.2

1. Add function in test for download image with wrong url
2. Fixed user in userprofile

### 1.2.3

1. Add comments to edittask
2. Add totaltax and totalamount to edittask
3. Partial add client in register

### 1.2.4

1. Not allow client see user for each task
2. Fixed "amount" bug for import invoice json

### 1.2.5

1. Create Client 

### 1.2.6

1. Functionally done 360 photo convert in test

### 1.3.0

1. Implement show 360 photo in edittask

### 1.3.1

1. Fixed photosphereviewer package import(1)

### 1.3.2

1. Fixed 360photo block close problem

### 1.3.3

1. Add marker to 360 photo

### 1.3.4

1. Change marker image and add test content to marker

### 1.3.5

1. Change CSS in add task
2. Successfully tested setstate in 360

### 1.3.6

1. Add pano boolean for image
2. Fix checklist comment in task information
3. Download pics from one item

### 1.3.7

1. Show checklist for each task
2. Dowanload checklist as PDF

### 1.3.8

1. Add marker on 360 pictures and connect with back end

### 1.3.9

1. Add chinese description for task and item
2. Change reload for edittask(test)
