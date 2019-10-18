class Paginator {
    constracter(data,numitem){
        this._data=data;
        this._numitem=numitem;
       this.pagesdata=[];
          for (let i = 0; i < this._data.length - 1; i += this._numitem) {
                  this.page.push(this._data.slice(i, i + this._numitem))
              }
        this.crrentpage=0;
      }
        page(number){return this.pagesdata[number]}
        lastpage(){return this.pagesdata.length-1}
        firstpage(){return this.pagesdata[0]}
        set itemperpage(number){return this._numitem=number}
        get itemperpage(){return this._numitem}
        set data(data){return this._data=data}
        get data(){return this._data}
        nextpage(){this.crrentpage++}
        prevpage(){this.crrentpage--}
        pages(){return this.pagesdata=[this.pagesdata.length]}
        creentpage(){this.pagesdata=[this.crrentpage]}
      }
    