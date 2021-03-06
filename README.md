
# backend-assignment


## Table of Contents

- [Requirements](#requirements)
- [Install](#install)
- [Configure App](#configure-app)
- [Running the project](#running-the-app)
- [Documentation](#documentation)


<a name="requirements"/>

### Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

#### Node
- ##### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- ##### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- ##### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


---

<a name="install"/>

### Install

    $ git clone https://github.com/Aakash-Jakhmola/backend-assignment.git
    $ cd backend-assignment
    $ npm install

---

<a name="configure-app"/>

### Configure app

Create `.env` file in the root. You will need a API KEY for [Moralis](https://moralis.io/).
Contents should be 

  `API_KEY=<Your api key>`

---
<a name="running-the-project"/>

### Running the project

    $ npm start
---
<a name="documentation"/>

### Documentation

I have used [Moralis Web 3 Api](https://admin.moralis.io/web3Api#) to get the tokens and nfs. 

1. GET /nfts/:ethaddress
  
  Moralis API used: https://deep-index.moralis.io/api/v2/:ethaddress/nft?chain=eth
  
  Request Parameters : 
  - offset  (optional)  integerstring
  - limit   (optional)  integerstring
    
  Response Format 
  ```
  {
    success: boolean,
    nfts: [ 
            {
              tokenId: string,
              contractAddress: string,
              image: string,
              name: string,
              description: string
            }
          ]
    message: string
  }
  ```
  
  Note: If address is not valid, then the response will be empty list.
  
  <br/>
  
 2. GET /tokens/:ethaddress
    
    Moralis API used: https://deep-index.moralis.io/api/v2/:ethaddress/erc20?chain=eth
    
    Response Format
    ```
    {
      success: boolean,
      tokens: [
                {
                  contractAddress: string,
                  name: string,
                  logo: string,
                  balance: string,
                }
              ]
    }
    ```
    
    Note: If address is not valid, then the response will be empty list.
