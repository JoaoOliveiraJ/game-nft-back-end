-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 16/03/2022 às 04:13
-- Versão do servidor: 10.4.21-MariaDB
-- Versão do PHP: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `inter`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `inventory`
--

CREATE TABLE `inventory` (
  `id` int(11) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `ticktes` int(11) NOT NULL DEFAULT 0,
  `ticket_valid` varchar(255) NOT NULL DEFAULT '00',
  `bombs` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `inventory`
--

INSERT INTO `inventory` (`id`, `owner`, `ticktes`, `ticket_valid`, `bombs`) VALUES
(5, '0xf73b3704459e7a14ea81588d6d950112343c72ee', 0, '00', 1428),
(6, '0x3227e11d0981a73fedf31abdd2eada80d0e695a1', 0, '00', 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `logs_waiting_list`
--

CREATE TABLE `logs_waiting_list` (
  `id` int(11) NOT NULL,
  `address_error` varchar(255) NOT NULL,
  `message` varchar(600) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `nft`
--

CREATE TABLE `nft` (
  `id` int(11) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `star` varchar(255) NOT NULL,
  `rounds` int(11) NOT NULL,
  `damage` int(11) NOT NULL,
  `select_farm` varchar(255) NOT NULL DEFAULT 'NO',
  `hour_fix_rounds_now` int(11) NOT NULL DEFAULT 0,
  `day_buy` int(11) NOT NULL,
  `day_renew` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `nft`
--

INSERT INTO `nft` (`id`, `owner`, `star`, `rounds`, `damage`, `select_farm`, `hour_fix_rounds_now`, `day_buy`, `day_renew`) VALUES
(817, '0xf73b3704459e7a14ea81588d6d950112343c72ee', 'three', 4, 4, 'YES', 0, 1, 45),
(818, '0xf73b3704459e7a14ea81588d6d950112343c72ee', 'two', 2, 2, 'NO', 0, 1, 45),
(819, '0xf73b3704459e7a14ea81588d6d950112343c72ee', 'four', 6, 6, 'NO', 0, 1, 45),
(820, '0xf73b3704459e7a14ea81588d6d950112343c72ee', 'three', 4, 4, 'NO', 0, 1, 45),
(821, '0xf73b3704459e7a14ea81588d6d950112343c72ee', 'four', 6, 6, 'NO', 0, 1, 45),
(822, '0xf73b3704459e7a14ea81588d6d950112343c72ee', 'four', 6, 6, 'NO', 0, 1, 45),
(823, '0xf73b3704459e7a14ea81588d6d950112343c72ee', 'two', 2, 2, 'NO', 0, 1, 45);

-- --------------------------------------------------------

--
-- Estrutura para tabela `nft_status`
--

CREATE TABLE `nft_status` (
  `id` int(11) NOT NULL,
  `star` varchar(222) NOT NULL,
  `rounds` int(11) NOT NULL,
  `damage` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `nft_status`
--

INSERT INTO `nft_status` (`id`, `star`, `rounds`, `damage`) VALUES
(1, 'one', 1, 1),
(2, 'two', 2, 2),
(3, 'three', 4, 4),
(4, 'four', 6, 6);

-- --------------------------------------------------------

--
-- Estrutura para tabela `prices`
--

CREATE TABLE `prices` (
  `id` int(11) NOT NULL,
  `box_one` int(30) NOT NULL,
  `box_two` int(11) NOT NULL,
  `box_three` int(11) NOT NULL,
  `fuel` int(30) NOT NULL,
  `damage` int(30) NOT NULL,
  `ticket_20` int(11) NOT NULL,
  `ticket_60` int(11) NOT NULL,
  `bomb` int(11) NOT NULL,
  `renew_price` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `prices`
--

INSERT INTO `prices` (`id`, `box_one`, `box_two`, `box_three`, `fuel`, `damage`, `ticket_20`, `ticket_60`, `bomb`, `renew_price`) VALUES
(1, 200, 0, 0, 1, 1, 20, 45, 15, 120);

-- --------------------------------------------------------

--
-- Estrutura para tabela `room`
--

CREATE TABLE `room` (
  `id` int(11) NOT NULL,
  `player_one` varchar(255) NOT NULL,
  `one_points` int(22) NOT NULL DEFAULT 0,
  `player_two` varchar(255) NOT NULL,
  `two_points` int(22) NOT NULL DEFAULT 0,
  `amount_pool` int(25) NOT NULL,
  `status` varchar(255) NOT NULL,
  `one_quit` varchar(255) NOT NULL,
  `two_quit` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `score`
--

CREATE TABLE `score` (
  `id` int(11) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `score` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `score`
--

INSERT INTO `score` (`id`, `owner`, `score`) VALUES
(1, '0xf73b3704459e7a14ea81588d6d950112343c72ee', 100),
(2, '0x299348389982b29982', 299),
(3, '0xjdnb29929294933', 500),
(4, '0x3227e11d0981a73fedf31abdd2eada80d0e695a1', 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `score_config`
--

CREATE TABLE `score_config` (
  `id` int(11) NOT NULL,
  `pool_rewards` int(11) NOT NULL DEFAULT 0,
  `time_init` int(11) NOT NULL DEFAULT 1,
  `time_finally` int(11) NOT NULL DEFAULT 7
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `score_config`
--

INSERT INTO `score_config` (`id`, `pool_rewards`, `time_init`, `time_finally`) VALUES
(1, 30000, 1, 7);

-- --------------------------------------------------------

--
-- Estrutura para tabela `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `address` varchar(255) NOT NULL DEFAULT '0x',
  `token_acess` varchar(255) NOT NULL DEFAULT '0x',
  `balance_token` int(30) NOT NULL DEFAULT 0,
  `balance_usdt` int(30) NOT NULL DEFAULT 0,
  `tnx_hash_token` varchar(255) NOT NULL DEFAULT '0x',
  `tnx_hash_usdt` varchar(255) NOT NULL DEFAULT '0x'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `user`
--

INSERT INTO `user` (`id`, `address`, `token_acess`, `balance_token`, `balance_usdt`, `tnx_hash_token`, `tnx_hash_usdt`) VALUES
(14, '0xf73b3704459e7a14ea81588d6d950112343c72ee', 'joao', 199445, 0, '0x', '0x'),
(15, '0x3227e11d0981a73fedf31abdd2eada80d0e695a1', 'Uo4iT8', 0, 0, '0x', '0x');

-- --------------------------------------------------------

--
-- Estrutura para tabela `waiting_list`
--

CREATE TABLE `waiting_list` (
  `id` int(11) NOT NULL,
  `address_waiting` varchar(255) NOT NULL,
  `token_bet` int(22) NOT NULL,
  `usd_bet` int(22) NOT NULL,
  `time_entry` int(11) NOT NULL,
  `time_end` int(22) NOT NULL DEFAULT 5
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `logs_waiting_list`
--
ALTER TABLE `logs_waiting_list`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `nft`
--
ALTER TABLE `nft`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `nft_status`
--
ALTER TABLE `nft_status`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `prices`
--
ALTER TABLE `prices`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `score`
--
ALTER TABLE `score`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `score_config`
--
ALTER TABLE `score_config`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `waiting_list`
--
ALTER TABLE `waiting_list`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `inventory`
--
ALTER TABLE `inventory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `logs_waiting_list`
--
ALTER TABLE `logs_waiting_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `nft`
--
ALTER TABLE `nft`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=824;

--
-- AUTO_INCREMENT de tabela `nft_status`
--
ALTER TABLE `nft_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `prices`
--
ALTER TABLE `prices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `room`
--
ALTER TABLE `room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `score`
--
ALTER TABLE `score`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `score_config`
--
ALTER TABLE `score_config`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `waiting_list`
--
ALTER TABLE `waiting_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
