import React, { Fragment } from 'react';
import { TableContainer, TableWapper, TableHead, TableBody } from './Style';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import IconButtonGroup from '../ButtonGroup/IconButtonGroup';
import Pagination from '../Pagination/Pagination';

const titles = [
    { key: 0, value: "N° de dossier" },
    { key: 1, value: "Radical" },
    { key: 2, value: "Nom & Prénom" },
    { key: 3, value: 'Agence' },
    { key: 4, value: "Date" },
    { key: 5, value: "Status" },
    { key: 6, value: "Affecté à" },
    { key: 7, value: "Type" },
    { key: 8, value: "Actions" }
];

const demandesList = [
    { numeroDossier: "4243155", radical: "XSQ112233", nomPrenom: "MOHAMMED AMINE", agence: "3452", date: "23/02/2020", status: "Demande Contrat", affecteA: "Rabat", typeDemande: "Immobilier" },
    { numeroDossier: "8769879", radical: "XSQ112233", nomPrenom: "MOHAMMED AMINE", agence: "3452", date: "12/01/2020", status: "Etude", affecteA: "Rabat", typeDemande: "Consommation" },
    { numeroDossier: "5426076", radical: "XSQ112233", nomPrenom: "MOHAMMED AMINE", agence: "3452", date: "13/11/2020", status: "Etude", affecteA: "Rabat", typeDemande: "Immobilier" },
    { numeroDossier: "2002525", radical: "XSQ112233", nomPrenom: "MOHAMMED AMINE", agence: "3452", date: "02/10/2020", status: "Etude", affecteA: "Rabat", typeDemande: "Consommation" },
    { numeroDossier: "4243455", radical: "XSQ112233", nomPrenom: "MOHAMMED AMINE", agence: "3452", date: "23/02/2020", status: "Demande Contrat", affecteA: "Rabat", typeDemande: "Immobilier" },
    { numeroDossier: "8769379", radical: "XSQ112233", nomPrenom: "MOHAMMED AMINE", agence: "3452", date: "12/01/2020", status: "Etude", affecteA: "Rabat", typeDemande: "Consommation" },
    { numeroDossier: "5426376", radical: "XSQ112233", nomPrenom: "MOHAMMED AMINE", agence: "3452", date: "13/11/2020", status: "Etude", affecteA: "Rabat", typeDemande: "Immobilier" },
    { numeroDossier: "2042525", radical: "XSQ112233", nomPrenom: "MOHAMMED AMINE", agence: "3452", date: "02/10/2020", status: "Etude", affecteA: "Rabat", typeDemande: "Consommation" },
    { numeroDossier: "1234567", radical: "XSQ112233", nomPrenom: "MOHAMMED AMINE", agence: "3452", date: "04/03/2020", status: "Etude", affecteA: "Rabat", typeDemande: "Immobilier" },
    { numeroDossier: "3232312", radical: "XSQ112233", nomPrenom: "MOHAMMED AMINE", agence: "3452", date: "28/03/2020", status: "Nouvelle Demande", affecteA: "Rabat", typeDemande: "Consommation" },
    { numeroDossier: "5435434", radical: "XSQ112233", nomPrenom: "MOHAMMED AMINE", agence: "3452", date: "30/03/2020", status: "Etude", affecteA: "Rabat", typeDemande: "Immobilier" },
    { numeroDossier: "4243255", radical: "XSQ112233", nomPrenom: "MOHAMMED AMINE", agence: "3452", date: "23/02/2020", status: "Demande Contrat", affecteA: "Rabat", typeDemande: "Immobilier" },
    { numeroDossier: "8769679", radical: "XSQ112233", nomPrenom: "MOHAMMED AMINE", agence: "3452", date: "12/01/2020", status: "Etude", affecteA: "Rabat", typeDemande: "Consommation" },
    { numeroDossier: "5006376", radical: "XSQ112233", nomPrenom: "MOHAMMED AMINE", agence: "3452", date: "13/11/2020", status: "Etude", affecteA: "Rabat", typeDemande: "Immobilier" },
    { numeroDossier: "2312525", radical: "XSQ112233", nomPrenom: "MOHAMMED AMINE", agence: "3452", date: "02/10/2020", status: "Etude", affecteA: "Rabat", typeDemande: "Consommation" },
];

const Table = () => {
        return (
            <Fragment>
                <TableContainer>
                    <ButtonGroup></ButtonGroup>
                    <TableWapper>
                        <TableHead>
                            <table>
                                <thead>
                                    <tr>
                                        {titles.map(title => { return <th key={title.key}>{title.value}</th>; })}
                                    </tr>
                                </thead>
                            </table>
                        </TableHead>
                        <TableBody>
                            <table>
                                <tbody>
                                    {
                                        demandesList.map(demmande => {
                                            return (
                                                <tr key={demmande.numeroDossier} >
                                                    <td style = {{ color: "#0779e4" , fontWeight: "500" }}>{demmande.numeroDossier}</td>
                                                    <td>{demmande.radical}</td>
                                                    <td>{demmande.nomPrenom}</td>
                                                    <td>{demmande.agence}</td>
                                                    <td>{demmande.date}</td>
                                                    <td>{demmande.status}</td>
                                                    <td>{demmande.affecteA}</td>
                                                    <td>{demmande.typeDemande}</td>
                                                    <td>
                                                        <IconButtonGroup></IconButtonGroup>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </TableBody>
                        <Pagination></Pagination>
                    </TableWapper>
                </TableContainer>
            </Fragment>
        )
    }
export default Table;