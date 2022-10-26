// add whatever parameters you deem necessary
function twoArrayObject(keys,values) {
    let obj ={}
    for(index = 0; index < keys.length; index++){
        if(keys[index]){
            if(values[index]){
                obj[keys[index]] =values[index]
            }else{obj[keys[index]]=null}
        }
    }
    return obj
}
