import styled from "styled-components";


export const DivStyled = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: 'Montserrat', sans-serif;

ul {
    width: 30%;
}

form {
    margin: 10px;
    display: flex;
    justify-content: space-between;
    width: 25%;
}

input {
    background-color: transparent;
    border: solid 1px #F6F7F9;
    color: #F6F7F9;
    font-family: 'Montserrat', sans-serif;
}

.edicao {
    width: 150px;
    background-color: transparent;
    border: solid 1px #F6F7F9;
    color: #F6F7F9;
}

.elementos {
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin: 10px;
}

button {
    border: 0px;
    color: #FFFFFF;
    padding: 0px 10px 0px;
    border-radius: 10px;
}

.delete {
    background-color: #DC3545;
}

.edit {
    background-color: #FFC107;
    color: #000000;
}

.add {
    background-color: #22A745;
}

@media screen and (max-width:767px) {
    .elementos {
        width: 100%;
    }
    ul {
        width: 100%;
    }
    form {
        width: 50%;
    }
}

`
