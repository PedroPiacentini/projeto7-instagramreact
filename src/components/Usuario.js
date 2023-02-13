
export default function Usuario(props) {


    return (
        <div class="usuario">
            <img data-test="profile-image" onClick={props.funcaoImagem} src={props.imagem} alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong data-test="name">{props.usuario}</strong>
                    <ion-icon data-test="edit-name" onClick={props.funcaoNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}