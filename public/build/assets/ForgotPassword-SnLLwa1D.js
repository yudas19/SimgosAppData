import{W as n,j as e,Y as d}from"./app-Dvlr_T_r.js";import{G as u}from"./GuestLayout-TgorLYpG.js";import{I as c}from"./InputError-EUZyUXeT.js";import{P as x}from"./PrimaryButton-C5N8uPkh.js";import{T as p}from"./TextInput-BJsdl_Bp.js";function y({status:t}){const{data:a,setData:r,post:o,processing:m,errors:i}=n({email:""}),l=s=>{s.preventDefault(),o(route("password.email"))};return e.jsxs(u,{children:[e.jsx(d,{title:"Forgot Password"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),t&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600 dark:text-green-400",children:t}),e.jsxs("form",{onSubmit:l,children:[e.jsx(p,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",isFocused:!0,onChange:s=>r("email",s.target.value)}),e.jsx(c,{message:i.email,className:"mt-2"}),e.jsx("div",{className:"flex items-center justify-end mt-4",children:e.jsx(x,{className:"ms-4",disabled:m,children:"Email Password Reset Link"})})]})]})}export{y as default};
