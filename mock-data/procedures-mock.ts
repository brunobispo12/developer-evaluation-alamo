import type { Procedures } from "@/app/types/procedure";

// Dados dos procedimentos expandidos (20 itens)
export const procedures: Procedures = [
  {
    time: "08:00",
    title: "Preparação Inicial do Laboratório",
    steps: [
      { item: "Solução Base A", amount: "5 mL" },
      { item: "Composto Iniciador B", amount: "250 mg" },
      { item: "Reagente Mediolab", amount: "2 gotas" },
      { item: "Catalisador (CATPURE)", amount: "5 mg" },
    ],
    observations: [
      "Verificar temperatura ambiente",
      "Calibrar equipamentos antes do uso",
    ],
    metrics: {
      CHO: "28 g",
      PTN: "23 g",
      LIP: "1.1 g",
      absorbance: "198 mAU",
    },
  },
  {
    time: "08:30",
    title: "Análise Bioquímica Matinal",
    steps: [
      { item: "Solução Tampão", amount: "12 mL" },
      { item: "Enzima Digestiva", amount: "180 mg" },
      { item: "Reagente Bio-Mix", amount: "4 gotas" },
      { item: "Estabilizante (BIOSTAB)", amount: "3 mg" },
      { item: "Controle Positivo", amount: "1 mL" },
    ],
    observations: ["Incubar a 37°C por 15 minutos"],
    metrics: {
      CHO: "24 g",
      PTN: "28 g",
      LIP: "1.5 g",
      absorbance: "232 mAU",
    },
  },
  {
    time: "09:15",
    title: "Teste de Pureza",
    steps: [
      { item: "Solução Purificadora", amount: "8 mL" },
      { item: "Agente Clarificante", amount: "120 mg" },
      { item: "Filtro Molecular", amount: "1 unidade" },
      { item: "Reagente PURITY-CHECK", amount: "2 gotas" },
    ],
    observations: [
      "Usar micropipeta calibrada",
      "Anotar cor da solução final",
    ],
    metrics: {
      CHO: "22 g",
      PTN: "26 g",
      LIP: "0.9 g",
      absorbance: "164 mAU",
    },
  },
  {
    time: "10:00",
    title: "Procedimento Matinal",
    steps: [
      { item: "Solução A", amount: "5 mL" },
      { item: "Composto B ou C", amount: "250 mg" },
      { item: "Reagente Mediolab", amount: "2 gotas" },
      { item: "Catalisador (CATPURE)", amount: "5 mg" },
    ],
    observations: [
      "Misturar em recipiente estéril",
      "Executar em fluxo laminar",
    ],
    metrics: {
      CHO: "26 g",
      PTN: "25 g",
      LIP: "1.3 g",
      absorbance: "215 mAU",
    },
  },
  {
    time: "10:45",
    title: "Análise Proteômica",
    steps: [
      { item: "Buffer de Extração", amount: "15 mL" },
      { item: "Inibidor de Protease", amount: "50 mg" },
      { item: "Detergente SDS", amount: "200 mg" },
      { item: "Reagente Bradford", amount: "5 gotas" },
      { item: "Padrão BSA", amount: "2 mL" },
    ],
    observations: [
      "Homogeneizar em vórtex por 30s",
      "Centrifugar a 12000 rpm",
    ],
    metrics: {
      CHO: "18 g",
      PTN: "35 g",
      LIP: "2.1 g",
      absorbance: "278 mAU",
    },
  },
  {
    time: "11:30",
    title: "Controle de Qualidade",
    steps: [
      { item: "Solução Padrão", amount: "10 mL" },
      { item: "Reagente QC-Standard", amount: "300 mg" },
      { item: "Marcador Fluorescente", amount: "3 gotas" },
      { item: "Calibrador Interno", amount: "1 mL" },
    ],
    observations: ["Verificar linearidade da curva"],
    metrics: {
      CHO: "30 g",
      PTN: "22 g",
      LIP: "1.0 g",
      absorbance: "195 mAU",
    },
  },
  {
    time: "12:15",
    title: "Preparação Pré-Almoço",
    steps: [
      { item: "Solução Conservante", amount: "6 mL" },
      { item: "Agente Antioxidante", amount: "80 mg" },
      { item: "Estabilizante pH", amount: "2 gotas" },
      { item: "Preservativo (PRESERVE-LAB)", amount: "4 mg" },
    ],
    observations: [
      "Armazenar em geladeira",
      "Etiquetar com data e hora",
    ],
    metrics: {
      CHO: "25 g",
      PTN: "24 g",
      LIP: "1.4 g",
      absorbance: "188 mAU",
    },
  },
  {
    time: "13:00",
    title: "Procedimento de Meio-dia",
    steps: [
      { item: "Solução B", amount: "10 mL" },
      { item: "Composto D ou E", amount: "150 mg" },
      { item: "Reagente ClearMix", amount: "3 gotas" },
      { item: "Estabilizante (STABILAB)", amount: "2 mg" },
    ],
    observations: ["Agitar por 3 minutos antes de aplicar"],
    metrics: {
      CHO: "26 g",
      PTN: "25 g",
      LIP: "1.3 g",
      absorbance: "189 mAU",
    },
  },
  {
    time: "13:45",
    title: "Análise Lipídica",
    steps: [
      { item: "Solvente Extrator", amount: "20 mL" },
      { item: "Ácido Graxo Padrão", amount: "100 mg" },
      { item: "Reagente Saponificação", amount: "5 mL" },
      { item: "Indicador Sudan III", amount: "1 gota" },
      { item: "Controle Lipídico", amount: "3 mL" },
    ],
    observations: [
      "Usar capela de exaustão",
      "Evitar exposição à luz",
    ],
    metrics: {
      CHO: "15 g",
      PTN: "20 g",
      LIP: "4.2 g",
      absorbance: "345 mAU",
    },
  },
  {
    time: "14:30",
    title: "Teste de Esterilidade",
    steps: [
      { item: "Meio de Cultura TSB", amount: "25 mL" },
      { item: "Amostra Teste", amount: "1 mL" },
      { item: "Controle Negativo", amount: "1 mL" },
      { item: "Antibiótico Teste", amount: "50 mg" },
    ],
    observations: [
      "Incubar a 35°C por 24h",
      "Observar turvação",
    ],
    metrics: {
      CHO: "32 g",
      PTN: "18 g",
      LIP: "0.8 g",
      absorbance: "156 mAU",
    },
  },
  {
    time: "15:15",
    title: "Análise Enzimática",
    steps: [
      { item: "Substrato Específico", amount: "8 mL" },
      { item: "Cofator Mg2+", amount: "10 mg" },
      { item: "Buffer Tris-HCl", amount: "5 mL" },
      { item: "Enzima Alvo", amount: "200 mg" },
      { item: "Inibidor Competitivo", amount: "1 mg" },
    ],
    observations: [
      "Monitorar cinética por 10 min",
      "Temperatura constante a 25°C",
    ],
    metrics: {
      CHO: "20 g",
      PTN: "30 g",
      LIP: "1.6 g",
      absorbance: "421 mAU",
    },
  },
  {
    time: "16:00",
    title: "Controle Microbiológico",
    steps: [
      { item: "Solução Salina Estéril", amount: "50 mL" },
      { item: "Swab Estéril", amount: "3 unidades" },
      { item: "Placa Petri com Ágar", amount: "5 unidades" },
      { item: "Marcador Bacteriano", amount: "1 mL" },
    ],
    observations: [
      "Técnica asséptica rigorosa",
      "Incubação por 48h",
    ],
    metrics: {
      CHO: "28 g",
      PTN: "19 g",
      LIP: "0.7 g",
      absorbance: "142 mAU",
    },
  },
  {
    time: "16:30",
    title: "Teste Térmico",
    steps: [
      { item: "Solução Térmica", amount: "7 mL" },
      { item: "Agente B ou C", amount: "300 mg" },
      { item: "Gotas de Neutralizante", amount: "2 gotas" },
      { item: "Controle de Temperatura", amount: "1 unidade" },
      { item: "Condutor (HEATPULSE)", amount: "6 mg" },
    ],
    observations: ["Usar luvas nitrílicas reforçadas"],
    metrics: {
      CHO: "26 g",
      PTN: "25 g",
      LIP: "1.3 g",
      absorbance: "202 mAU",
    },
  },
  {
    time: "17:15",
    title: "Análise Espectrofotométrica",
    steps: [
      { item: "Cubeta de Quartzo", amount: "2 unidades" },
      { item: "Solução Branco", amount: "3 mL" },
      { item: "Amostra Diluída", amount: "3 mL" },
      { item: "Padrão Interno", amount: "0.5 mL" },
    ],
    observations: [
      "Calibrar espectrofotômetro",
      "Leitura em triplicata",
    ],
    metrics: {
      CHO: "24 g",
      PTN: "27 g",
      LIP: "1.8 g",
      absorbance: "384 mAU",
    },
  },
  {
    time: "18:00",
    title: "Finalização do Ciclo",
    steps: [
      { item: "Solução de Lavagem", amount: "8 mL" },
      { item: "Composto X ou Z", amount: "200 mg" },
      { item: "Neutralizante Final", amount: "1 gota" },
      { item: "Agente Secativo", amount: "0.2 mL" },
      { item: "Catalisador (ENDO-CLEAN)", amount: "4 mg" },
    ],
    observations: ["Armazenar amostra a 4 °C"],
    metrics: {
      CHO: "26 g",
      PTN: "25 g",
      LIP: "1.3 g",
      absorbance: "210 mAU",
    },
  },
  {
    time: "18:45",
    title: "Limpeza e Descontaminação",
    steps: [
      { item: "Detergente Laboratorial", amount: "100 mL" },
      { item: "Desinfetante 70%", amount: "50 mL" },
      { item: "Água Destilada", amount: "200 mL" },
      { item: "Pano de Limpeza", amount: "5 unidades" },
    ],
    observations: [
      "Limpar todas as superfícies",
      "Descartar resíduos adequadamente",
    ],
    metrics: {
      CHO: "0 g",
      PTN: "0 g",
      LIP: "0 g",
      absorbance: "0 mAU",
    },
  },
  {
    time: "19:30",
    title: "Preparação Noturna",
    steps: [
      { item: "Solução Overnight", amount: "15 mL" },
      { item: "Estabilizante Longo Prazo", amount: "25 mg" },
      { item: "Conservante Frio", amount: "3 gotas" },
      { item: "Selante Hermético", amount: "1 aplicação" },
    ],
    observations: [
      "Preparar para período noturno",
      "Verificar vedação dos recipientes",
    ],
    metrics: {
      CHO: "35 g",
      PTN: "15 g",
      LIP: "2.5 g",
      absorbance: "167 mAU",
    },
  },
  {
    time: "20:15",
    title: "Análise de Resíduos",
    steps: [
      { item: "Detector de Contaminantes", amount: "1 kit" },
      { item: "Solução Reveladora", amount: "10 mL" },
      { item: "Papel Indicador", amount: "5 tiras" },
      { item: "Neutralizador de Resíduos", amount: "20 mL" },
    ],
    observations: [
      "Verificar ausência de contaminação cruzada",
      "Documentar resultados",
    ],
    metrics: {
      CHO: "12 g",
      PTN: "8 g",
      LIP: "0.3 g",
      absorbance: "89 mAU",
    },
  },
  {
    time: "21:00",
    title: "Controle Final do Dia",
    steps: [
      { item: "Checklist de Equipamentos", amount: "1 formulário" },
      { item: "Registro de Temperatura", amount: "1 log" },
      { item: "Verificação de Estoque", amount: "1 inventário" },
      { item: "Backup de Dados", amount: "1 procedimento" },
    ],
    observations: [
      "Conferir todos os equipamentos",
      "Salvar dados do dia",
      "Preparar relatório diário",
    ],
    metrics: {
      CHO: "0 g",
      PTN: "0 g",
      LIP: "0 g",
      absorbance: "0 mAU",
    },
  },
  {
    time: "21:45",
    title: "Fechamento do Laboratório",
    steps: [
      { item: "Desligar Equipamentos", amount: "checklist completo" },
      { item: "Verificar Segurança", amount: "1 vistoria" },
      { item: "Ativar Sistemas Noturnos", amount: "1 protocolo" },
      { item: "Lacrar Amostras Críticas", amount: "conforme necessário" },
    ],
    observations: [
      "Confirmar desligamento seguro",
      "Ativar alarmes de segurança",
      "Registrar horário de saída",
    ],
    metrics: {
      CHO: "0 g",
      PTN: "0 g",
      LIP: "0 g",
      absorbance: "0 mAU",
    },
  },
];