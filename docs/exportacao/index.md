# <DocHeadingIcon icon="share-outline" color="#67E8F9" /> Exportar o jogo

Quando o jogo estiver pronto, a Continue transforma o projeto em um arquivo próprio para a plataforma escolhida. Você não precisa refazer cenas, objetos ou scripts: escolha o destino, confira os dados e gere a versão final.

<div class="guide-grid">
  <GuideCard href="/exportacao/android" icon="logo-android" color="#63d98b" title="Android" description="APK para instalar e AAB para publicar na Google Play." />
  <GuideCard href="/exportacao/windows" icon="desktop-outline" color="#69a7ff" title="Windows" description="ZIP com o executável e tudo o que o jogo precisa." />
  <GuideCard href="/exportacao/web" icon="globe-outline" color="#67e8f9" title="Web (HTML5)" description="ZIP pronto para itch.io e jogos no navegador." />
</div>

## <DocHeadingIcon icon="checkmark-done-outline" color="#A78BFA" /> Antes de exportar

Abra as **Configurações do projeto** e revise o nome, o ícone, a versão, a orientação e a resolução base. Confira também o modo de ajuste em outras telas, pois ele define qual dimensão da câmera permanece fixa quando o formato da tela muda.

No Android, revise ainda o identificador do pacote, a versão mínima do sistema e as permissões usadas pelo jogo.

## <DocHeadingIcon icon="download-outline" color="#67E8F9" /> Como gerar uma versão

1. Entre no projeto e abra **Configurações do projeto**.
2. Salve qualquer alteração feita nas configurações.
3. Vá até **Exportar** e abra Android, Windows ou Web.
4. Toque no botão do jogo que deseja gerar.
5. Confira a tela de confirmação.
6. Confirme a exportação e aguarde a conclusão.
7. Use o botão de compartilhar para enviar ou publicar o arquivo.

::: tip Teste antes de publicar
Gere primeiro uma versão para teste. Verifique os controles, a câmera, as animações, a iluminação e a adaptação a outros tamanhos de tela.
:::

## <DocHeadingIcon icon="save-outline" color="#C4B5FD" /> Exportações salvas

Cada formato mantém uma lista das versões geradas dentro das configurações do projeto. Nessa lista você pode ver o nome, a data e o tamanho do arquivo, compartilhar novamente ou excluir uma versão antiga.

Mudar a versão do jogo antes de uma nova exportação ajuda a identificar qual arquivo é mais recente.

## <DocHeadingIcon icon="help-circle-outline" color="#FB923C" /> Qual formato escolher

### <DocHeadingIcon icon="logo-android" color="#63D98B" /> Quero testar ou instalar no Android

Gere um **APK**. Ele pode ser enviado para um celular Android e instalado diretamente.

### <DocHeadingIcon icon="storefront-outline" color="#63D98B" /> Quero publicar na Google Play

Gere um **AAB**. Esse é o pacote usado para enviar o jogo à loja; ele não é o formato indicado para instalação direta no celular.

### <DocHeadingIcon icon="desktop-outline" color="#69A7FF" /> Quero jogar no computador

Gere a versão para **Windows**. Compartilhe o ZIP completo e extraia o conteúdo antes de abrir o executável.

### <DocHeadingIcon icon="globe-outline" color="#67E8F9" /> Quero publicar no itch.io ou no navegador

Gere a versão **Web (HTML5)**. O ZIP já fica organizado para serviços que executam jogos no navegador.
