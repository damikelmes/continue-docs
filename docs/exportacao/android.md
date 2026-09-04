# <DocHeadingIcon icon="logo-android" color="#63D98B" /> Exportar para Android

A Continue pode gerar dois formatos para Android: **APK**, usado para instalar e testar o jogo, e **AAB**, usado para publicar na Google Play.

## <DocHeadingIcon icon="options-outline" color="#63D98B" /> Preparar o aplicativo

Nas **Configurações do projeto**, confira o nome, o ícone e a versão do jogo. Essas informações identificam a versão que será gerada.

Na seção **Android**, ajuste o identificador do pacote. Ele deve usar letras minúsculas e pontos, como `com.seunome.meujogo`. Escolha também a versão mínima do Android: aparelhos mais antigos que a opção escolhida não poderão instalar o jogo.

Em **Opções avançadas**, você pode definir se o jogo usa tela cheia, se mantém a tela ligada e quais permissões do aparelho serão solicitadas. Ative somente o que o jogo realmente usa.

## <DocHeadingIcon icon="logo-github" color="#F4F4F5" /> Conectar a conta na primeira exportação

Para preparar o APK ou o AAB, a Continue usa uma conta do GitHub vinculada. Ao tocar em **Jogo para Android** sem uma conta conectada, a tela de conexão aparece antes da escolha do formato.

1. Aguarde a Continue mostrar o código de autorização.
2. Copie o código se o GitHub solicitar.
3. Toque em **Abrir GitHub e autorizar**.
4. Autorize a Continue e volte para a engine.
5. A conexão termina automaticamente e a escolha de APK ou AAB é aberta.

A preparação é feita em uma área privada da sua própria conta. A Continue não pede nem guarda a senha do GitHub. Para remover a conexão depois, use as configurações da tela inicial da engine.

## <DocHeadingIcon icon="phone-portrait-outline" color="#63D98B" /> Escolher APK ou AAB

### <DocHeadingIcon icon="download-outline" color="#63D98B" /> APK

Escolha **APK** para testar no seu celular, enviar para outra pessoa ou instalar o jogo fora de uma loja. O Android pode pedir autorização para instalar aplicativos vindos do navegador ou do gerenciador de arquivos.

### <DocHeadingIcon icon="storefront-outline" color="#63D98B" /> AAB

Escolha **AAB** quando o jogo estiver pronto para ser enviado à Google Play. Esse arquivo é um pacote de publicação e não deve ser aberto diretamente no celular.

## <DocHeadingIcon icon="checkmark-circle-outline" color="#A7F3D0" /> Gerar o arquivo

1. Abra **Exportar** e depois **Android**.
2. Toque em **Jogo para Android**.
3. Selecione **APK** ou **AAB**.
4. Confira o nome do arquivo, o identificador, a compatibilidade e as permissões.
5. Toque em **Gerar APK** ou **Gerar AAB**.
6. Aguarde a preparação terminar e compartilhe o arquivo gerado.

A exportação precisa de internet enquanto o arquivo é preparado. Você pode sair da tela de confirmação depois de iniciar, mas mantenha a engine aberta até a conclusão.

## <DocHeadingIcon icon="save-outline" color="#C4B5FD" /> Encontrar uma versão novamente

Os APKs e AABs concluídos aparecem em **Arquivos Android salvos**. Use o botão de compartilhar para enviar o mesmo arquivo novamente ou o botão de excluir para remover uma versão que não será mais usada.

::: tip Antes de enviar para a loja
Instale e teste um APK da mesma versão do projeto. Assim você consegue revisar o jogo no aparelho antes de gerar o AAB de publicação.
:::
