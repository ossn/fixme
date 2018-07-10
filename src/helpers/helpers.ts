import { outboundLink, pageview } from "react-ga";
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

export const develop = process.env.REACT_APP_ENV === "development";

export const customPageView = (url: string) => {
  if (!develop) {
    pageview(url);
  }
};

export const customOutboundLink = (url: string) =>
  develop
    ? window.open(url, "_blank")
    : outboundLink({ label: url }, () => {
        window.open(url, "_blank");
      });
