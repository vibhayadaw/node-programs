data = {
  name: 'Vibha',
  family:{
    spouse: 'Anoop'
  },
  address: {
    home: {
      city: 'Bangalore',
    },
    office: {
      city: 'Bangalore'
    }
  }
}
const final_obj = new Object();

const flat_obj = (prefix='user', data) => {
  for (let key in data){
    if (typeof data[key] === 'object'){
      flat_obj(prefix+'_'+key, data[key]);
    }
    else {
      // Just add the key to  final obj.
      final_obj[prefix+'_'+key]= data[key];
    }
  }
}

flat_obj('user', data);
console.log('final Obj', final_obj);
