export const customStyles = (small: boolean) => ({
  option: () => ({
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    backgroundColor: "transparent",
    boxSizing: "border-box",
    color: "#940046",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    fontWeight: 600,
    padding: ".5em .1em",
    userSelect: "none",
    width: "100%",
    borderBottom: "1px solid #e7e7e7",
    "&:hover":{
      backgroundColor:"#E7E7E7",
      cursor:"pointer"
    }
  }),
  dropdownIndicator: () => ({ display: "none" }),
  indicatorSeparator: () => ({ display: "none" }),
  container: () => ({
    display: "inline-block",
    boxSizing: "border-box",
    position: "relative",
    paddingLeft: "0.5em",
    paddingBottom: "0.5rem",
    height: "100%",
    justifyContent: "center"
  }),
  multiValue: () => ({
    color: "#e7e7e7",
    boxSizing: "border-box",
    display: "flex",
    margin: 2,
    fontWeight: 600
  }),
  multiValueRemove: () => ({
    color: "rgba(231, 231, 231, 0.66)",
    borderRadius: "0px 10px 25% 0px",
    backgroundColor: "#940046",
    alignItems: "center",
    display: "flex",
    boxSizing: "border-box",
    paddingLeft: "10px",
    paddingRight: "4px",
    svg: {
      borderRadius: "60px",
      boxShadow: "0px 0px 2px rgba(231, 231, 231, 0.66)",
      display: "inline-block"
    }
  }),
  multiValueLabel: () => ({
    borderRadius: "10px 0px 0px 10px",
    backgroundColor: "#940046",
    color: "#e7e7e7",
    overflow: "hidden",
    padding: 3,
    paddingLeft: 6,
    fontWeight: 600,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    boxSizing: "border-box"
  }),
  control: () => ({
    border: 0,
    alignItems: "center",
    background: "transparent",
    borderBottom: "2px solid #940046",
    minWidth: small ? 100 : 250,
    boxShadow: null,
    boxSizing: "border-box",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: 38,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }),
  singleValue: () => ({
    color: "#e7e7e7",
    backgroundColor: "#940046",
    fontWeight: 600,
    borderRadius: "10px",
    boxSizing: "border-box",
    display: "flex",
    padding: ".25em 1em"
  }),
  menu: () => ({
    top: "100%",
    backgroundColor: "#fcfcfc",
    borderRadius: "8px",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.2)",
    marginTop: "-4px",
    position: "absolute",
    width: "100%",
    zIndex: 1,
    boxSizing: "border-box"
  }),
  menuList: () => ({
    maxHeight: 300,
    overflowY: "auto",
    paddingBottom: 4,
    paddingTop: 4,
    position: "relative",
    backgroundColor: "#fcfcfc",
    WebkitOverflowScrolling: "touch",
    boxSizing: "border-box",
    borderRadius: "8px",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.2)"
  }),
  placeholder: (base: any) => ({
    ...base,
    color: "#1f2b44",
  }),
});
