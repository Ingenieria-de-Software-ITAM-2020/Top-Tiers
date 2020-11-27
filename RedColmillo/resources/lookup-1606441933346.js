(function(window, undefined) {
  var dictionary = {
    "58b52d0d-7a73-4869-a75b-f09d90735215": "Chat Grupal - Nuevo Grupo (2)",
    "3fb5f303-b504-4543-83d6-b23dfe913a75": "Chat Grupal - Nuevos miembros (2)",
    "a50d7f62-4c53-42bc-96dd-714d90079d6c": "Chat Grupal - Notificaciones (2)",
    "8128d058-7075-4c87-86c3-da4b5700f388": "Chat Grupal - Nuevos miembros",
    "5ff899d0-09cb-4bf3-bae5-0f2458847aa9": "Chat Grupal - Subir Documento (2)",
    "4815a699-7dfc-4c31-bd28-75ebf2a752ab": "Chat Individual - Nuevo chat (2)",
    "500146d1-18ce-47fd-8dc7-2c67ac1ded51": "Chatbot-caso-3 imported",
    "779ddf89-0420-45c8-ba5d-d92819eb0cd3": "Chat Grupal - Mensaje Enviado",
    "7aa8e684-c306-4a88-ad41-cacc6c605164": "Chat Individual - Nuevo chat (4)",
    "40e22b66-65ae-4ef9-99b0-b393c5cce228": "Chat Grupal - Notificaciones",
    "d0aae74d-62a7-4e28-bf64-b3183fbc35bd": "Chat Grupal - Nuevos miembros (3)",
    "2c6f99af-da5c-494d-8a8b-fdaf06f68655": "Chat Individual",
    "73e59856-dce8-4e58-b47a-b1d497e62ea1": "Chatbot-caso-1 imported",
    "39c3fdbf-30f7-4528-b439-cbc3a4bf4cca": "Chat Individual - Mandar mensaje",
    "694cda33-4c6b-4c85-830a-8768279ca9f9": "Chatbot-caso-4 imported",
    "14532712-6815-46bc-a27a-fdb0ca77311f": "Iniciar sesión",
    "abba4d63-a977-4b97-a39d-88d1ca12cbfe": "Chat Grupal - Documentos",
    "efd766aa-3f4f-443d-8eda-29a6651d8e10": "Chat Grupal - Subir documento",
    "27623e8b-ded3-4e1e-999a-6a0b238d10fb": "Chatbot-2 imported",
    "0183e00e-038c-4ba0-8856-d960f3fa3edd": "Chat Individual - Nuevo chat (3)",
    "ad8ca1de-6726-4265-b842-223b7acfb6f4": "Chatbot-4 imported",
    "c7c19458-07eb-4ec1-ad48-539724c37c41": "Chat Individual - Nuevo chat",
    "7f1c383a-75e7-49df-9f25-45034b3963af": "Menu principal",
    "210b4bbe-856b-4767-96fa-5c8887b2c9d6": "Chatbot-3 imported",
    "7dde4e16-4291-4856-9554-68433fa13753": "Chat Grupal - Documentos (2)",
    "5f830079-bff3-44c8-aeb4-006fd1ba8ce1": "Chatbot-caso-2 imported",
    "ca6b19a9-e66a-4bbc-a25f-a382df638087": "Chat - Nuevo Grupo",
    "2898925c-2059-474a-b9ef-f376b9a53c6f": "Chatbot imported",
    "a0434d30-d99e-4b00-9be4-25961e37811e": "Chat Individual - Mandar mensaje (2)",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Chat Grupal",
    "8a778328-84da-49c1-8f22-f99278bfa781": "Chat Grupal - Nuevos Miembros (4)",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);