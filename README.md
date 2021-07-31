# Measurabl Technical Assessment * Active *
#### Design & Development by Samuel Bjorklund

## Description
*Instances are privated and only available upon request*

Technical assessment designed on behalf of Measurabl fullfilling requirements of a pre-provided Frontend Design mock challenge. Approach to purpose of overall challenge and requirements have been adjusted to reflect long-term career goals as a full-stack engineers. Prompt re-worked with a mid-level focus on adaptability, scalability, and security. Please see below for included highlights of completed project.

Original prompt can be found at the following link:
https://gist.github.com/kheiligh/1f8208ac1a91eee1db8b1d92c8d4d1fd

## Featured additions
### Inclusion of stylization libraries 
Primarily made use of 'styled-components' library to recreate a barebones immitation of the Measurabl home through SVGs.

### Focus on Adaptability
With the original goal being to complete a FETCH from two different static sources and join them into a single table I decided to set out to make a more effective data retrieval system. The included system, baring in mind the general table form recieved from MySQL databases, is able to retrieve any number of fields and entries linked by a foreign key and effectively present them on screen. To see the requirements of the format for the retrieved data please see below.

### Enchanced Scalability
Despite working with a smaller data set I preferred to focus on creating a table that would be able to properly display and interact with the data recieved and in pursuit of this I elected to format the table using pagination. By doing this, in a hypothetical scenario, I am able to maintain minimal loadtimes regardless of the amount to entries that need to be rendered to the page.

### Security Benefits
With security development being my aboslute long-term career goal I had the ambition to find some minor ways to help improve my components ability to protect any vulnerable information. While I decided to avoid taking any extreme routes such as cookie parsing, authentication, or cross-site verificaton; I did find a few minor yet effective methods of preventing the transmission of needless data. The main features including the transfer of data requests and modeling to the back end to ensure the public users are limited in their ability to retrieve information outside of intended plain text as well as the inclusion of a basic testing suite to confirm components are only capable to interacting with the dom appropriately.

## Table of Contents
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Routes](#routes)
1. [Schema](#schema)

## Usage
- Fork repo and pull latest version to local machine or hosted instance.
- Navigate to the root directory of the repo.
- Run the following commands **BEFORE** initializing product _(Administrative or Super-user rights may be required)_
```sh
npm install
```
#### Starting the Developer.ENV
- Run the following commands to initialize your instance(currently configured to process.env.PORT || localhost:3000):
```sh
npm start
```
On successfull start expect message: `Service running on PORT#`

On failure please inspect the message beginning at line: `-UNABLE TO START-`
#### Starting the Optimized Production Build
- Run the following commands to initialize your instance(currently configured to process.env.PORT || localhost:3000localhost:3003):
```sh
npm run build
npm run server
```
On successfull start expect message: `Service running on PORT#`

On failure please inspect the message beginning at line: `-UNABLE TO START-`

## Requirements
- Node v6.13.0+ 
- Terminal Access(npm or yarn)

## Routes
### End-user Routes
-GET `/get-data`

**Success Status Code:** `200`

**Returns:** Expect JSON with the following keys.
```json
  {
    data: [
        {object}
        ...
    ]
  }
```

## Schema
Without availablity of a MySQL database a bit of creativity was required. Although this does NOT been that the page is not ready to handle as much data as you can throw at it. In order to make use of the page with your data sets please see that your tables are formatted with a matching id key and follow the schema provided below. The back-end model system will automatically sort and format your data into a single table provided there are not colliding columns exluding the id.

```json
    [
        {
            id: #,
            example_key_1: example_1,
            example_key_2: example_2,
            ...
        }
    ]
```


#### Samuel Bjorklund