import request from '../utils/request';


export function query($url) {
  return request(`http://localhost:9000${$url}`);
  // return request('/db_arms/nav');
    
};

export function queryList($url){
  return request(`http://localhost:9000${$url}`);
};


