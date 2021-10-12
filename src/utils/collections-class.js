'use strict'

class Collection{
  constructor(name,model){
    this.name = name;
    this.model = model;
    // console.log('this.model: ',this.model)
  }

  async create(json){
    try{

      let newRecord = await this.model.create(json);
      return newRecord;

    }catch(e){

      console.log(` *** ERR @ create model: ${this.model} with e: ${e}`)
      return e;
    
    }
  }

  async read(id, options = {}){
    let record;
    // console.log('id:',id, 'options: ', options)
    try{
      
      if(id){
        options['where'] = { id };
        record = await this.model.findOne(options);
        return record; 

      }else{
        let record = await this.model.findAll(options);
        return record;
      }

    }catch(e){

      console.log(`*** ERR @ read model: ${this.model} with e: ${e}`)
      return e;
    
    }

  }

  async update(id,json){

    try{

      if(!id) throw new Error(`no id provided for model: ${this.model}`);

      let fetchedBeerRecord = await this.model.findOne({ where: { id:id } });

      let updateBeerRecord = await fetchedBeerRecord.update(json)

      return updateBeerRecord;

    }catch(e){

      console.log(`ERR @ update model: ${this.model} with e: ${e}`)
      return e;

    }

  }

  async delete(id){

    try{

      if(!id) throw new Error(`no id provided for model: ${this.model}`);

      let killBeer = await this.model.destroy( { where: { id:id }} );

      return killBeer;

    }catch(e){
      console.log(`ERR @ delete model: ${this.model} with e: ${e}`)
      return e;
    }

  }

}

module.exports = Collection;
