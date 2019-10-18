# Pagination Homework
## Write a Javascript object class to handle pagination.

**Pagination** helps to make it easier to navigate a long *list of data*.

The paginator constructor will take 2 parameters, the 1st parameter will be the data, the second will be the number of items per page to be viewed.

It will also contain multiple methods to navigate the pages.

the methods and properties are:

- `page(number)` will return the data on page `number`
- `lastPage()` will return the last page
- `firstPage()` will return the first page
- `setItemsPerPage(number)` will rearrange the data to the new configuration
- `setData(data)` will replace the data and reconfigure the cache of pagination
- `nextPage()` will goto next page of current page
- `prevPage()` will goto previous page of current page
- `pages` will return the total pages
- `currentPage` will have a number corresponding to the current page being viewed


The `data` and `itemsPerPage` properties will have to be private with setter and getter.