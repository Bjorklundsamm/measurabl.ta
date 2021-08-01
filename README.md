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
Originally in discussion of my hopes and ambitions as a team member of Measurabl it was mentioned that despite my skills revolving primarily around front-end development; I intended to pursue a future in Fullstack with a focus on security. Baring that in mind I made a handful of additions to the original prompt of the challenge that typically fall outside the range of frontend design. This includes some functional components such as a simple search bar, pagination, and a back-end server designed to help model and return data in an effective and secure process. 

### Enchanced Scalability
Despite working with a smaller data set I preferred to focus on creating a table that would be able to properly display and interact with the data recieved and in pursuit of this I elected to format the table using pagination. Additionally it can be noted that the main table featured on the page has be re-worked to adapt to any number of tables/entries fed to it provided they match the pre-made data-sets within the assessment's prompt. By doing this, in a hypothetical scenario, I am able to maintain minimal loadtimes regardless of the amount to entries that need to be rendered to the page. For the exact requirements of the data set's format please see below. 

### Security Benefits
While avoiding the needless inclusion of any extreme security enhancements I set out to find some small additions that felt they matched the theme of the assessment prompt. By doing this I was able to find a few simple boosts that are able to help remove potential threats from the hands of end users. The most notable features would be the closed ended response system present through-out the apps stateless component, the transferring of the request system to the back-end to ensure users are only able to recieve necessary flat data, and the limiting of any unnecessary page interactions via cursor or input. 

## Table of Contents
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Routes](#routes)
1. [Schema](#schema)
1. [Test-cases](#test-cases)

## Usage
- Fork repo and pull latest version to local machine or hosted instance.
- Navigate to the root directory of the repo.
- Run the following commands **BEFORE** initializing product _(Administrative or Super-user rights may be required)_
```sh
npm install
```
### Starting the Developer.ENV
- Run the following commands to initialize your instance(currently configured to process.env.PORT || localhost:3000):
```sh
npm start
```
On successfull start expect message: `Service running on PORT#`

On failure please inspect the message beginning at line: `-UNABLE TO START-`
### Starting the Optimized Production Build
- Run the following commands to initialize your instance(currently configured to process.env.PORT || localhost:3000):
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
Without availablity of a MySQL database a bit of creativity was required. Although this does NOT been that the page is not ready to handle as much data as you can throw at it. In order to make use of the page with your data sets please see that your tables are formatted with a matching id key and follow the schema provided below. The back-end model system will automatically sort and format your data into a single table overwriting colliding columns matched by id.

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
## Test-cases
```json
Example test cases
 [
  expect React.app TO render IF !dataRecieved
  expect Table TO NOT render IF data is not present
  expect Table TO recieve StaticData IF server.response = "404"
  expect Table.data TO use server.response.data IF Server.response = "200"
  expect Server.response.data TO BE Array.length(1) - "[data: [{}.{}.{}]"
  expect Search.results.length TO BE < data.length
  expect Link TO BE 'clicked!' IF pointer event
 ]
```


Further questions regarding the design or functionality of the featured web-application can be forwarded directly to myself via comment or email.

#### Thank you for your continued interest and consideration,
### Samuel Bjorklund
