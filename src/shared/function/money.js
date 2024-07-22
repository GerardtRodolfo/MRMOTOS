export const convertNumberToMoney = (value) => {
    value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL' });
};

