import React, {useState} from 'react';


function Exercicio01(){
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [nota01, setNota01] = useState(0);
    const [nota02, setNota02] = useState(0);
    // conta
    let media = (nota01 + nota02) / 2;
    // aprovação
    let situacao = media >= 7 ? 'Aprovado(a)' : 'Reprovado(a)';
    return(
        <div>
            <form>
            <input type='text'onChange={e => setNome(e.target.value)} placeholder='Nome'/>
            <input type='text' onChange={e => setSobrenome(e.target.value)} placeholder='Sobrenome' />
            <input type='number' onChange={e => setNota01(parseFloat(e.target.value))} placeholder='Primeira nota'/>
            <input type='number'onChange={e => setNota02(parseFloat(e.target.value))} placeholder='Segunda nota'/>

            {nota01 && nota02 ? <h1>{nome} {sobrenome} foi {situacao} com média {media}</h1> : ''}
            </form>
        </div>
    );
}
export default Exercicio01;