import React from "react";
import ModalContainer from "../../shared/container/modal";
import Modal from '../../shared/components/modal';

const Login = () => (
    <ModalContainer>
        <Modal handleClick={()=>{console.log("handle this")}} btnActive={false}>
        <a href="http://localhost:8888/login"><button className="button-login">Connect with Spotify</button></a>
        </Modal>
    </ModalContainer>
)

export default Login;