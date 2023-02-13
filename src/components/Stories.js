import Story from "./Story";

export default function Stories() {

    const stories = [
        { imagem: "9gag", usuario: "9gag" },
        { imagem: "meowed", usuario: "meowed" },
        { imagem: "barked", usuario: "barked" },
        { imagem: "nathanwpylestrangeplanet", usuario: "nathanwpylestrangeplanet" },
        { imagem: "wawawicomics", usuario: "wawawicomics" },
        { imagem: "respondeai", usuario: "respondeai" },
        { imagem: "filomoderna", usuario: "filomoderna" },
        { imagem: "memeriagourmet", usuario: "memeriagourmet" }
    ];

    return (
        <div class="stories">
            {stories.map((story) => <Story imagem={`assets/img/${story.imagem}.svg`} usuario={story.usuario} />)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}