export const convertPLNToUSD = (PLN) => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  if(typeof PLN == 'string' || PLN === undefined){
    return NaN;
  }
  else if(typeof PLN !== 'string' && typeof PLN !== 'number'){
    return 'Error';
  }
  else if(PLN < 0){
    return formatter.format(0).replace(/\u00a0/g, ' ');
  }
  else{
  const PLNtoUSD = PLN / 3.5;
  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
  }
}