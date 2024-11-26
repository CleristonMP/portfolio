import os
import json

def generate_image_list(folder_path, project_name):
    # Lista de extensões de imagem comuns
    image_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp')
    
    # Lista para armazenar os caminhos das imagens
    image_paths = []
    
    # Percorre todos os arquivos na pasta
    for filename in sorted(os.listdir(folder_path)):
        if filename.lower().endswith(image_extensions):
            # Constrói o caminho no formato desejado
            image_path = f"/assets/imgs/projects/{project_name}/{filename}"
            image_paths.append(image_path)
    
    # Cria a string de saída manualmente no formato desejado
    output = "  {\n"
    output += f'    title: "{project_name}",\n'
    output += "    images: [\n"
    
    # Adiciona cada imagem com aspas duplas
    for path in image_paths:
        output += f'      "{path}",\n'
    
    # Remove a última vírgula e fecha os colchetes/chaves
    if image_paths:
        output = output.rstrip(',\n') + '\n'
    output += "    ],\n"
    output += "  },"
    
    return output

# Exemplo de uso
if __name__ == "__main__":
    # Define o caminho da pasta e nome do projeto
    folder_path = "/home/cleriston/Projetos/portfolio/public/assets/imgs/projects/reports-registry"
    project_name = "reports-registry"
    
    # Chama a função com os parâmetros
    result = generate_image_list(folder_path, project_name)
    print(result)

    # Opcional: salvar em um arquivo
    # with open('output.txt', 'w') as f:
    #     f.write(result)
