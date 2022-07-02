import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Typography from "@material-ui/core/Typography";
import EditIcon from '@mui/icons-material/Edit';

const columns1 = [
  { field: 'id', headerName: 'No', width: 70 },
  { field: 'firstName', headerName: 'Izina', width: 300 },
  { field: 'email', headerName: 'Details', width: 730 },
  // { field: 'action', headerName: 'action', width: 730 },
  // { field: 'leader', headerName: 'Urihagarariye', width: 180 },
  // { field: 'location', headerName: 'Aho riherereye ', width: 180 },
];
const rows1 = [
  { id: 1,firstName: 'Izina ry’ikoraniro', email: "Lumiere de Jesus( former KIST-KHI)" },
  { id: 2,firstName: 'E-mail y’ikoraniro', email: "gmail@gmail.com", },
  { id: 3,firstName: 'Urihagarariye', email: "JEAN DE DIEU HAKIZIMANA", },
  { id: 4,firstName: 'Aho riherereye', email: "CST( FORMER KIST)", },
  { id: 5,firstName: 'Umunsi duteranaho', email: "BURI WA MBERE SAA 17:00 muri chapelle ya CHUK", },
  { id: 6,firstName: "Amashuri yisumbuye dufasha cg duturanye", email: "LYCEE NOTRE DAME DE CITAUX, LYCEE DE KIGALI", },
  { id: 7,firstName: 'Umubare wabarigize', email: 110, },
  { id: 8,firstName: 'Umubare wabasenderejwe', email: 50, },
  // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
];


const columns2a = [
  { field: 'id', headerName: 'No', width: 70 },
  { field: 'duties', headerName: 'INSHINGANO', width: 200 },
  { field: 'names', headerName: 'AMAZINA YOMBI', width: 400 },
  { field: 'phone', headerName: 'TELPHONE', width: 180 }
];
const rows2a = [
  { id: 1, duties: 'BERGER ', names: "HAKIZIMANA JEAN DE DIEU", phone: "0781885063" },
  { id: 2, duties: 'BERGER ', names: "DUSHIMIRIMANA DIANE", phone: "0780564438" },
  { id: 3, duties: 'BERGER ', names: "IKORIBYAYO JOSIANE", phone: "0784720721" },
  { id: 4, duties: 'BERGER ', names: "YIZERE NADINE", phone: "0783402644" },
  { id: 5, duties: 'BERGER ', names: "IRANDAGIYE THEOPHILE", phone: "0787626618" },
  { id: 6, duties: 'BERGER ', names: "TWIZERIMANA MICHAEL", phone: "0786926953" },
];

const columns2b = [
  { field: 'id', headerName: 'No', width: 70 },
  { field: 'mName', headerName: 'IZINA RYA MINISTERI ', width: 200 },
  { field: 'leader', headerName: 'UYIHAGARARIYE', width: 400 },
  { field: 'phone', headerName: 'TELPHONE', width: 180 }
];
const rows2b = [
  { id: 1, mName: 'EVANGELISATION', leader: 'ERIC UKWISHAKA', phone: "0780671312" },
  { id: 2, mName: 'LITURGIE', leader: 'TUYISENGE RODRIGUE', phone: "0781625365" },
  { id: 3, mName: 'COMPASSION ', leader: 'CLEMENT UWIMANA', phone: "0783661262" },
  { id: 4, mName: 'ACCUEILLE', leader: 'PROTOGENE MUGIRANEZA', phone: "0785897702" },
  { id: 5, mName: 'INTERSSESSION', leader: 'KUBWIMANA MAURICE', phone: "0782399932 " },
  { id: 6, mName: 'DISCERNMENT(UBUSHISHOZI)', leader: 'HAKIZIMANA JEAN DE DIEU', phone: "0781885063" }
];

const columns2c = [
  { field: 'id', headerName: 'No', width: 70 },
  { field: 'Name', headerName: 'NAMES', width: 200 },
  { field: 'phone', headerName: 'TELEPHONE', width: 180 }
];
const rows2c = [
  { id: 1, Name: 'IRADUKUNDA REGIS', phone: '0783852072'},
];

const columns2d = [
  { field: 'id', headerName: 'No', width: 70 },
  { field: 'Name', headerName: 'NAMES', width: 200 },
  { field: 'phone', headerName: 'TELEPHONE', width: 180 }
];
const rows2d = [
  { id: 1, Name: 'NTAKIYIMANA ERNESTE', phone: '0787670632'},
];

const columns2e = [
  { field: 'id', headerName: 'No', width: 70 },
  { field: 'Name', headerName: 'NAMES', width: 200 },
  { field: 'phone', headerName: 'TELEPHONE', width: 180 }
];
const rows2e = [
  { id: 1, Name: 'NAMAHIRWE EDITH', phone: '0786404908'},
];

const columns3 = [
  { field: 'id', headerName: 'No', width: 50 },
  { field: 'action', headerName: 'IGIKORWA', width: 180 },
  { field: 'start', headerName: 'IGIHE KIZATANGIRIRA', width: 180 },
  { field: 'actor', headerName: 'ABAZAGIKORA', width: 180 },
  { field: 'place', headerName: 'AHO KIZAKORERWA', width: 180 },
  { field: 'end', headerName: 'IGIHE KIZASOREZWA', width: 180 },
  { field: 'requirement', headerName: 'IBIKENEWE', width: 180 },
];
const rows3 = [
  { id: 1, action: 'UMWIHERERO W’IKORANIRO', start: '14/03/2020', actor: "IKORANIRO RYOSE", place: "KIST ", end: "14/03", requirement: "UBWITABIRE" },
  { id: 2, action: 'IGIKORWA CY’URUKUNDO', start: '03/04/2020', actor: "IKORANIRO RYOSE", place: "KIST ", end: "14/03", requirement: "UBWITABIRE" },
  { id: 3, action: 'URUGENDO NYOBOKAMANA I JALI', start: '03/04/2020', actor: "IKORANIRO RYOSE", place: "KIST ", end: "14/03", requirement: "UBWITABIRE" },
  { id: 4, action: 'DECLARATION YA CACAHOUETTE', start: '03/04/2020', actor: "IKORANIRO RYOSE", place: "KIST ", end: "14/03", requirement: "UBWITABIRE" },
  { id: 5, action: 'SPORT', start: '03/04/2020', actor: "IKORANIRO RYOSE", place: "KIST ", end: "14/03", requirement: "UBWITABIRE" },
  { id: 6, action: 'NAMA Y’ABASENDEREJWE ', start: '03/04/2020', actor: "IKORANIRO RYOSE", place: "KIST ", end: "14/03", requirement: "UBWITABIRE" },
  { id: 7, action: 'GUSURA ANDI MAKORANIRO  BICIYE MURI ZA MINISTERI ', start: '03/04/2020', actor: "IKORANIRO RYOSE", place: "KIST ", end: "14/03", requirement: "UBWITABIRE" },
  
];

export default function ExpensesTable() {
  return (
    <>
    <Typography variant='h6' mb={20} align="center">1. UMWIRONDORO W’IKORANIRO </Typography>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows1}
        columns={columns1}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    <Typography variant='h6' mb={20} align="center">2. IMIYOBORERE Y’IKORANIRO  </Typography>
    <Typography variant='p' mb={20} align="center">COMITE IRIHO UBU </Typography>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows2a}
        columns={columns2a}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    <Typography variant='p' mb={20} align="center">MINISTERI ZIGIZE IKORANIRO  </Typography>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows2b}
        columns={columns2b}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    <Typography variant='p' mb={20} align="center">UHAGARARIYE IVUGURURWA (Abasenderejwe)  </Typography>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows2c}
        columns={columns2c}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    <Typography variant='p' mb={20} align="center">BERGE WA COMITE ICYUYE IGIHE</Typography>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows2d}
        columns={columns2d}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    <Typography variant='p' mb={20} align="center">UHAGARARIYE ABARANGIJE</Typography>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows2e}
        columns={columns2e}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    <Typography variant='h6' mb={20} align="center">3. IBIKORWA BY’IKORANIRO 2020</Typography>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows3}
        columns={columns3}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </>
  );
}

