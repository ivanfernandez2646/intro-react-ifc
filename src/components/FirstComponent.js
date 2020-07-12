import React, {Component} from 'react';

class FirstComponent extends Component{
    render(){
        let personDetails = {
            address: "1 de Marzo Nº10",
            skills: ['Java', 'C#', '.NET', 'HTML']
        };

        return (
            <React.Fragment>
                <h1>Soy FirstComponent desarrollado por Iván</h1>
                <h5>Vivo en la calle {personDetails.address}</h5>
                <h5>Tecnologías utilizadas:</h5>
                <ul>
                    {
                        personDetails.skills.map((skill, i) => {
                            return(
                                <li key={i}>
                                    {skill}
                                </li>
                            );
                        })
                    }
                </ul>
            </React.Fragment>
        );
    }
}

export default FirstComponent;