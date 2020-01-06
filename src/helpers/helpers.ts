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
export const local = process.env.REACT_APP_ENV === "local";

export const customPageView = (url: string) => {
  if (!develop || !local) {
    pageview(url);
  }
};

export const customOutboundLink = (url: string) => {
  if (develop || local) {
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.target = "_blank";
    link.style.display = "none";
    link.setAttribute('rel', 'noopener noreferrer')
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    outboundLink({ label: url }, () => {
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.target = "_blank";
      link.style.display = "none";
      link.setAttribute('rel', 'noopener noreferrer')
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link)
    });
  }
};

export const truncate = (text: string, limit: number, suffix: string) => {
  let content: string[]
  text = text.trim();
  // convert the text into a array of words and remove words beyond the limit
  content = text.split(' ').slice(0, limit);

  text = content.join(' ') + (suffix ? suffix : '');
  return text;
}
