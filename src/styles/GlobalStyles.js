import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
        *{
                margin:0;
                padding: 0;
                box-sizing: border-box;
                list-style: none;
                text-decoration: none;
                font-family: 'Kanit', sans-serif;
        }

        html {
                scroll-behavior: smooth;
                scroll-padding-top: 100px;
        }

        :root {
                --marroncito: #db6b30ff;
                --marronzote: #623412ff;
                --rosa: #ee6688ff;
                --amarillo: #ffc907ff;
                --verdecito: #85ff9eff;
                --saucecito: #b0ffc7ff;
                --mentita: #daffefff;
        }

        body{
                background-color: var(--marronzote);
        }
`;