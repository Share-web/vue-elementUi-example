const isProduction = process.env.NODE_ENV === 'production';

const isProdUrl=(url)=>{
  let isProdurl=isProduction?'./static':'../../static';

  return isProdurl+url
};

module.exports= isProdUrl;
