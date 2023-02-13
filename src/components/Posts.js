import Post from "./Post";
export default function Posts() {
    const posts = [
        {
            imagemPost: "gato-telefone",
            usuario: "meowed",
            imagemUsuario: "meowed",
            curtidoPor: "respondeai",
            imagemCurtidoPor: "respondeai",
            quantidadeCurtida: 523
        },
        {
            imagemPost: "dog",
            usuario: "barked",
            imagemUsuario: "barked",
            curtidoPor: "adorable_animals",
            imagemCurtidoPor: "adorable_animals",
            quantidadeCurtida: 159
        },
        {
            imagemPost: "gato-telefone",
            usuario: "meowed",
            imagemUsuario: "meowed",
            curtidoPor: "respondeai",
            imagemCurtidoPor: "respondeai",
            quantidadeCurtida: 523
        },
        {
            imagemPost: "dog",
            usuario: "barked",
            imagemUsuario: "barked",
            curtidoPor: "adorable_animals",
            imagemCurtidoPor: "adorable_animals",
            quantidadeCurtida: 159
        }
    ];

    return (

        <div data-test="post" class="posts">
            {posts.map((post) => <Post
                imagemPost={post.imagemPost}
                usuario={post.usuario}
                imagemUsuario={post.imagemUsuario}
                curtidoPor={post.curtidoPor}
                imagemCurtidoPor={post.imagemCurtidoPor}
                quantidadeCurtida={post.quantidadeCurtida}
            />)}
        </div>
    );
}