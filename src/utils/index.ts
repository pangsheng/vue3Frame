function DynamiStateUrl(url:string){
  const tempUrl=`/src/${url}.vue`;
  return new URL(tempUrl, import.meta.url).href
}

export default DynamiStateUrl