import React from 'react';
import { StructureTable } from './pages';
import { Header } from './components';
import "./App.css";
import MessageBox from './components/MessageBox/MessageBox';
import { autoAuthorization, getUsersData } from './function';

interface userInfo {
  login?: string,
  premisson?: string
}

function App() {
  const [msgActive, setMsgActive] = React.useState(false);
  const [msgCode, setMsgCode] = React.useState(0);
  const [msgMessage, setMsgMessage] = React.useState("")
  const [logined, setLogined] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState<userInfo>({});
  const [searchNickName, setSearchNickName] = React.useState("");
  const [usersData, setUserData] = React.useState<any>([]);
  const [updateData, setUpdateData] = React.useState(false);

  const updateUsersData = () => {
    setUpdateData(prev => !prev);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setMsgActive(false)
      setMsgCode(0)
      setMsgMessage("")
    }, 3000);
  }, [msgActive])

  React.useEffect(() => {
    getUsersData(searchNickName)
      .then(res => setUserData(res.data.usersData))
      .catch(err => console.error("При получении данных произошла ошибка:", err));
  }, [searchNickName, updateData])

  React.useEffect(() => {
    autoAuthorization(setUserInfo)
      .then((res) => res && setLogined(true))
      .catch((err) => console.error("При авторизации произошла ошибка:", err));
  }, []);

  return (
    <div className="App">
      <Header setMsgActive={setMsgActive} setMsgCode={setMsgCode} setMsgMessage={setMsgMessage} logined={logined} setLogined={() => setLogined(true)} userInfo={userInfo} setUserInfo={setUserInfo} setSearchNicname={setSearchNickName} updateUsersData={updateUsersData} />
      <StructureTable data={usersData} />
      {msgActive && <MessageBox code={msgCode} message={msgMessage} />}
    </div>
  );
}

export default App;
