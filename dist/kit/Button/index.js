import{r as o}from"../../index-ea5e2cac.js";var r=function(){const o=Array.prototype.slice.call(arguments).filter(Boolean),r={},e=[];o.forEach((o=>{(o?o.split(" "):[]).forEach((o=>{if(o.startsWith("atm_")){const[,e]=o.split("_");r[e]=o}else e.push(o)}))}));const a=[];for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&a.push(r[o]);return a.push(...e),a.join(" ")};const e={colors:{primary:{default:{background:"coral",borderColor:"#000000",boxShadow:""},hover:{background:"yellow",borderColor:"red",boxShadow:"none"},disabled:{background:"gray",borderColor:"blue",boxShadow:"none"}},secondary:{default:{background:"",borderColor:"",boxShadow:""},hover:{background:"",borderColor:"",boxShadow:""},disabled:{background:"",borderColor:"",boxShadow:""}}},sizes:{small:{height:"30px",borderRadius:"6px"},medium:{height:"50px",borderRadius:"8px"},large:{height:"100px",borderRadius:"12px"}}},a={button:(()=>{throw new Error('Using the "css" tag in runtime is not supported. Make sure you have set up the Babel plugin correctly.')})`
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    touch-action: manipulation;
    position: relative;
    user-select: none;
    cursor: pointer;
    outline: none;
    border: none;
    background: none;
    transition: all 0.2s ease-in-out;

    &[data-color='primary'] {
      background: ${e.colors.primary.default.background};
      border-color: ${e.colors.primary.default.borderColor};
      box-shadow: ${e.colors.primary.default.boxShadow};

      &:hover {
        background: ${e.colors.primary.hover.background};
        border-color: ${e.colors.primary.hover.borderColor};
        box-shadow: ${e.colors.primary.hover.boxShadow};
      }

      &:disabled {
        background: ${e.colors.primary.disabled.background};
        border-color: ${e.colors.primary.disabled.borderColor};
        box-shadow: ${e.colors.primary.disabled.boxShadow};
      }
    }

    &[data-type='secondary'] {
      background: ${e.colors.primary.default.background};
      border-color: ${e.colors.primary.default.borderColor};
      box-shadow: ${e.colors.primary.default.boxShadow};

      &:hover {
        background: ${e.colors.primary.hover.background};
        border-color: ${e.colors.primary.hover.borderColor};
        box-shadow: ${e.colors.primary.hover.boxShadow};
      }

      &:disabled {
        background: ${e.colors.primary.disabled.background};
        border-color: ${e.colors.primary.disabled.borderColor};
        box-shadow: ${e.colors.primary.disabled.boxShadow};
      }
    }

    &[data-size='small'] {
      height: ${e.sizes.small.height};

      border-radius: ${e.sizes.small.borderRadius};
    }

    &[data-size='medium'] {
      height: ${e.sizes.medium.height};

      border-radius: ${e.sizes.medium.borderRadius};
    }

    &[data-size='large'] {
      height: ${e.sizes.large.height};

      border-radius: ${e.sizes.large.borderRadius};
    }
  `},d=({id:e,onClick:d,color:s="primary",size:i="medium",type:l="button",disabled:t=!1,tabIndex:b=1,className:c,children:n})=>o.createElement("button",{id:e,tabIndex:b,type:l,onClick:d,disabled:t,"data-color":s,"data-size":i,className:r(a.button,c)},n);export{d as Button,a as classNames};
