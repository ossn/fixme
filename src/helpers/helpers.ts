export const multiFilter = (
  array: any[],
  filters: { [key: string]: any }
): any[] => {
  const filterKeys = Object.keys(filters);
  // filters all elements passing the criteria
  return array.filter((item: any) => {
    // dynamically validate all filter criteria
    /* tslint:disable:no-bitwise */
    return filterKeys.every(key => !!~filters[key].indexOf(item[key]));
  });
};
