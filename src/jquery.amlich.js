/**
 * jQuery.AmLich v0.3.1
 * (https://github.com/ichuot/jquery-amlich)
 *
 * Copyright 2004 Ho Ngoc Duc [http://come.to/duc]. All Rights Reserved.
 * Permission to use, copy, modify, and redistribute this software and its
 * documentation for personal, non-commercial use is hereby granted provided that
 * this copyright notice appears in all copies.
 */
(function( $ ) {

  var settings = {},
      ABOUT  = 'Âm lịch Việt Nam - Version 0.\n© 2004 Hồ Ngọc Đức [http://www.informatik.uni-leipzig.de/~duc/amlich/]',
      TK13 = new Array(
        0x226da2, 0x4695d0, 0x3349dc, 0x5849b0, 0x42a4b0, 0x2aaab8, 0x506a50, 0x3ab540, 0x24bb44, 0x48ab6,
        0x3495b0, 0x205372, 0x464970, 0x2e64f9, 0x5454b0, 0x3e6a50, 0x296c57, 0x4c5ac0, 0x36ab60, 0x2386e,
        0x4892e0, 0x30c97c, 0x56c960, 0x40d4a0, 0x2adaa8, 0x4eb550, 0x3a56a0, 0x24adb5, 0x4c25d0, 0x3492e,
        0x1ed2b2, 0x44a950, 0x2ed4d9, 0x52b2a0, 0x3cb550, 0x285757, 0x4e4da0, 0x36a5b0, 0x225574, 0x4852b,
        0x33a93c, 0x566930, 0x406aa0, 0x2aada8, 0x50ab50, 0x3a4b60, 0x24aae4, 0x4aa570, 0x365270, 0x1f526,
        0x42e530, 0x2e6cba, 0x5456a0, 0x3c5b50, 0x294ad6, 0x4e4ae0, 0x38a4e0, 0x20d4d4, 0x46d260, 0x30d53,
        0x56b520, 0x3eb6a0, 0x2b56a9, 0x505570, 0x3c49d0, 0x25a1b5, 0x4aa4b0, 0x34aa50, 0x1eea51, 0x42b52,
        0x2cb5aa, 0x52ab60, 0x3e95b0, 0x284b76, 0x4e4970, 0x3864b0, 0x22b4b3, 0x466a50, 0x306b3b, 0x565ac,
        0x40ab60, 0x2b2ad8, 0x5049e0, 0x3aa4d0, 0x24d4b5, 0x48b250, 0x32b520, 0x1cf522, 0x42b5a0, 0x2c95e,
        0x5295b0, 0x3e49b0, 0x28a576, 0x4ca4b0, 0x36aa50, 0x20ba54, 0x466d40, 0x2ead6c, 0x54ab60, 0x409370
      ),
      TK14 = new Array(
        0x2d49b8, 0x504970, 0x3a64b0, 0x246ca5, 0x48da50, 0x325aa0, 0x1cd6c1, 0x42a6e0, 0x2e92fb, 0x5292e,
        0x3cc960, 0x26d557, 0x4cd4a0, 0x34d550, 0x215553, 0x4656a0, 0x30a6d0, 0x1aa5d1, 0x4092b0, 0x2aa5b,
        0x50a950, 0x38b2a0, 0x23b2a5, 0x48ad50, 0x344da0, 0x1ccba1, 0x42a570, 0x2e52f9, 0x545270, 0x3c693,
        0x266b37, 0x4c6aa0, 0x36ab50, 0x205753, 0x464b60, 0x30a67c, 0x56a2e0, 0x3ed160, 0x28e968, 0x4ed4a,
        0x38daa0, 0x225ea5, 0x4856d0, 0x344ae0, 0x1f85d2, 0x42a2d0, 0x2cd17a, 0x52aa50, 0x3cb520, 0x24d74,
        0x4aada0, 0x3655d0, 0x2253b3, 0x4645b0, 0x30a2b0, 0x1ba2b1, 0x40aa50, 0x28b559, 0x4e6b20, 0x38ad6,
        0x255365, 0x489370, 0x344570, 0x1ea573, 0x4452b0, 0x2c6a6a, 0x50d950, 0x3c5aa0, 0x27aac7, 0x4aa6e,
        0x3652e0, 0x20cae3, 0x46a560, 0x2ed2bb, 0x54d2a0, 0x3ed550, 0x2a5ad9, 0x4e56a0, 0x38a6d0, 0x2455d,
        0x4a52b0, 0x32a8d0, 0x1ce552, 0x42b2a0, 0x2cb56a, 0x50ad50, 0x3c4da0, 0x26a7a6, 0x4ca570, 0x3651b,
        0x21a174, 0x466530, 0x316a9c, 0x545aa0, 0x3eab50, 0x2a2bd9, 0x502b60, 0x38a370, 0x2452e5, 0x48d160
      ),
      TK15 = new Array(
        0x32e4b0, 0x1c7523, 0x40daa0, 0x2d5b4b, 0x5256d0, 0x3c2ae0, 0x26a3d7, 0x4ca2d0, 0x36d150, 0x1ed95,
        0x44b520, 0x2eb69c, 0x54ada0, 0x3e55d0, 0x2b25b9, 0x5045b0, 0x3aa2b0, 0x22aab5, 0x48a950, 0x32b52,
        0x1ceaa1, 0x40ab60, 0x2c55bc, 0x524b70, 0x3e4570, 0x265377, 0x4c52b0, 0x366950, 0x216954, 0x445aa,
        0x2eab5c, 0x54a6e0, 0x404ae0, 0x28a5e8, 0x4ea560, 0x38d2a0, 0x22eaa6, 0x46d550, 0x3256a0, 0x1d95a,
        0x4295d0, 0x2c4afb, 0x5249b0, 0x3ca4d0, 0x26d2d7, 0x4ab2a0, 0x34b550, 0x205d54, 0x462da0, 0x2e95b,
        0x1b1571, 0x4049b0, 0x2aa4f9, 0x4e64b0, 0x386a90, 0x22aea6, 0x486b50, 0x322b60, 0x1caae2, 0x42937,
        0x2f496b, 0x50c960, 0x3ae4d0, 0x266b27, 0x4adaa0, 0x345ad0, 0x2036d3, 0x4626e0, 0x3092e0, 0x18d2d,
        0x3ec950, 0x28d4d9, 0x4eb4a0, 0x36b690, 0x2355a6, 0x4855b0, 0x3425d0, 0x1ca5b2, 0x4292b0, 0x2ca97,
        0x526950, 0x3a74a0, 0x24b5a8, 0x4aab60, 0x3653b0, 0x202b74, 0x462570, 0x3052b0, 0x1ad2b1, 0x3e695,
        0x286ad9, 0x4e5aa0, 0x38ab50, 0x224ed5, 0x484ae0, 0x32a370, 0x1f44e3, 0x40d2a0, 0x2bd94b, 0x50b550
      ),
      TK16 = new Array(
        0x3c56a0, 0x2497a7, 0x4a95d0, 0x364ae0, 0x20a9b4, 0x44a4d0, 0x2ed250, 0x19aaa1, 0x3eb550, 0x2856d,
        0x4e2da0, 0x3895b0, 0x244b75, 0x484970, 0x32a4b0, 0x1cb4b4, 0x426a90, 0x2aad5c, 0x505b50, 0x3c2b6,
        0x2695e8, 0x4a92f0, 0x364970, 0x206964, 0x44d4a0, 0x2cea5c, 0x52d690, 0x3e56d0, 0x2b2b5a, 0x4e26e,
        0x3892e0, 0x22cad6, 0x48c950, 0x30d4a0, 0x1af4a2, 0x40b590, 0x2c56dc, 0x5055b0, 0x3c25d0, 0x2693b,
        0x4c92b0, 0x34a950, 0x1fb155, 0x446ca0, 0x2ead50, 0x192b61, 0x3e4bb0, 0x2a25f9, 0x502570, 0x3852b,
        0x22aaa6, 0x46e950, 0x326aa0, 0x1abaa3, 0x40ab50, 0x2c4b7b, 0x524ae0, 0x3aa570, 0x2652d7, 0x4ad26,
        0x34d950, 0x1e5d55, 0x4456a0, 0x2e96d0, 0x1a55d2, 0x3e4ae0, 0x28a4fa, 0x4ea4d0, 0x38d250, 0x20d69,
        0x46b550, 0x3235a0, 0x1caba2, 0x4095b0, 0x2d49bc, 0x524970, 0x3ca4b0, 0x24b2b8, 0x4a6a50, 0x346d4,
        0x1fab54, 0x442ba0, 0x2e9370, 0x2e52f2, 0x544970, 0x3c64e9, 0x60d4a0, 0x4aea50, 0x373aa6, 0x5a56d,
        0x462b60, 0x3185e3, 0x5692e0, 0x3ec97b, 0x64a950, 0x4ed4a0, 0x38daa8, 0x5cb550, 0x4856b0, 0x342da4
      ),
      TK17 = new Array(
        0x58a5d0, 0x4292d0, 0x2cd2b2, 0x52a950, 0x3cb4d9, 0x606aa0, 0x4aad50, 0x365756, 0x5c4ba0, 0x44a5b,
        0x314573, 0x5652b0, 0x41a94b, 0x62e950, 0x4e6aa0, 0x38ada8, 0x5e9b50, 0x484b60, 0x32aae4, 0x58a4f,
        0x445260, 0x2bd262, 0x50d550, 0x3d5a9a, 0x6256a0, 0x4a96d0, 0x3749d6, 0x5c49e0, 0x46a4d0, 0x2ed4d,
        0x54d250, 0x3ed53b, 0x64b540, 0x4cb5a0, 0x3995a8, 0x5e95b0, 0x4a49b0, 0x32a974, 0x58a4b0, 0x42aa5,
        0x2cea51, 0x506d40, 0x3aadbb, 0x622b60, 0x4c9370, 0x364af6, 0x5c4970, 0x4664b0, 0x3074a3, 0x52da5,
        0x3e6b5b, 0x6456d0, 0x502ae0, 0x3893e7, 0x5e92e0, 0x48c960, 0x33d155, 0x56d4a0, 0x40da50, 0x2d355,
        0x5256a0, 0x3aa6fa, 0x6225d0, 0x4c92d0, 0x36aab6, 0x5aa950, 0x44b4a0, 0x2ebaa4, 0x54ad50, 0x3f55a,
        0x644ba0, 0x4ea5b0, 0x3b5278, 0x5e52b0, 0x486930, 0x327555, 0x586aa0, 0x40ab50, 0x2c5b52, 0x524b6,
        0x3da56a, 0x60a4f0, 0x4c5260, 0x34ea66, 0x5ad530, 0x445aa0, 0x2eb6a3, 0x5496d0, 0x404ae0, 0x28c9d,
        0x4ea4d0, 0x38d2d8, 0x5eb250, 0x46b520, 0x31d545, 0x56ada0, 0x4295d0, 0x2c55b2, 0x5249b0, 0x3ca4f9
      ),
      TK18 = new Array(
        0x62a4b0, 0x4caa50, 0x37b457, 0x5c6b40, 0x46ada0, 0x305b64, 0x569370, 0x424970, 0x2cc971, 0x5064b,
        0x3a6aa8, 0x5eda50, 0x4a5aa0, 0x32aec5, 0x58a6e0, 0x4492f0, 0x3052e2, 0x52c960, 0x3dd49a, 0x62d4a,
        0x4cd550, 0x365b57, 0x5c56a0, 0x46a6d0, 0x3295d4, 0x5692d0, 0x40a95c, 0x2ad4b0, 0x50b2a0, 0x38b5a,
        0x5ead50, 0x4a4da0, 0x34aba4, 0x58a570, 0x4452b0, 0x2eb273, 0x546930, 0x3c6abb, 0x626aa0, 0x4cab5,
        0x394b57, 0x5c4b60, 0x46a570, 0x3252e4, 0x56d160, 0x3ee93c, 0x64d520, 0x4edaa0, 0x3b5b29, 0x5e56d,
        0x4a4ae0, 0x34a5d5, 0x5aa2d0, 0x42d150, 0x2cea52, 0x52b520, 0x3cd6ab, 0x60ada0, 0x4c55d0, 0x384bb,
        0x5e45b0, 0x46a2b0, 0x30d2b4, 0x56aa50, 0x41b52c, 0x646b20, 0x4ead60, 0x3a55e9, 0x609370, 0x4a457,
        0x34a575, 0x5a52b0, 0x446a50, 0x2d5a52, 0x525aa0, 0x3dab4b, 0x62a6e0, 0x4c92e0, 0x36c6e6, 0x5ca56,
        0x46d4a0, 0x2eeaa5, 0x54d550, 0x4056a0, 0x2ad5a1, 0x4ea5d0, 0x3b52d9, 0x6052b0, 0x4aa950, 0x32d55,
        0x58b2a0, 0x42b550, 0x2e6d52, 0x524da0, 0x3da5cb, 0x62a570, 0x4e51b0, 0x36a977, 0x5c6530, 0x466a90
      ),
      TK19 = new Array(
        0x30baa3, 0x56ab50, 0x422ba0, 0x2cab61, 0x52a370, 0x3c51e8, 0x60d160, 0x4ae4b0, 0x376926, 0x58daa0,
        0x445b50, 0x3116d2, 0x562ae0, 0x3ea2e0, 0x28e2d2, 0x4ec950, 0x38d556, 0x5cb520, 0x46b690, 0x325da4,
        0x5855d0, 0x4225d0, 0x2ca5b3, 0x52a2b0, 0x3da8b7, 0x60a950, 0x4ab4a0, 0x35b2a5, 0x5aad50, 0x4455b0,
        0x302b74, 0x562570, 0x4052f9, 0x6452b0, 0x4e6950, 0x386d56, 0x5e5aa0, 0x46ab50, 0x3256d4, 0x584ae0,
        0x42a570, 0x2d4553, 0x50d2a0, 0x3be8a7, 0x60d550, 0x4a5aa0, 0x34ada5, 0x5a95d0, 0x464ae0, 0x2eaab4,
        0x54a4d0, 0x3ed2b8, 0x64b290, 0x4cb550, 0x385757, 0x5e2da0, 0x4895d0, 0x324d75, 0x5849b0, 0x42a4b0,
        0x2da4b3, 0x506a90, 0x3aad98, 0x606b50, 0x4c2b60, 0x359365, 0x5a9370, 0x464970, 0x306964, 0x52e4a0,
        0x3cea6a, 0x62da90, 0x4e5ad0, 0x392ad6, 0x5e2ae0, 0x4892e0, 0x32cad5, 0x56c950, 0x40d4a0, 0x2bd4a3,
        0x50b690, 0x3a57a7, 0x6055b0, 0x4c25d0, 0x3695b5, 0x5a92b0, 0x44a950, 0x2ed954, 0x54b4a0, 0x3cb550,
        0x286b52, 0x4e55b0, 0x3a2776, 0x5e2570, 0x4852b0, 0x32aaa5, 0x56e950, 0x406aa0, 0x2abaa3, 0x50ab50
      ), /* Years 1800-1899 */
      TK20 = new Array(
        0x3c4bd8, 0x624ae0, 0x4ca570, 0x3854d5, 0x5cd260, 0x44d950, 0x315554, 0x5656a0, 0x409ad0, 0x2a55d2,
        0x504ae0, 0x3aa5b6, 0x60a4d0, 0x48d250, 0x33d255, 0x58b540, 0x42d6a0, 0x2cada2, 0x5295b0, 0x3f4977,
        0x644970, 0x4ca4b0, 0x36b4b5, 0x5c6a50, 0x466d40, 0x2fab54, 0x562b60, 0x409570, 0x2c52f2, 0x504970,
        0x3a6566, 0x5ed4a0, 0x48ea50, 0x336a95, 0x585ad0, 0x442b60, 0x2f86e3, 0x5292e0, 0x3dc8d7, 0x62c950,
        0x4cd4a0, 0x35d8a6, 0x5ab550, 0x4656a0, 0x31a5b4, 0x5625d0, 0x4092d0, 0x2ad2b2, 0x50a950, 0x38b557,
        0x5e6ca0, 0x48b550, 0x355355, 0x584da0, 0x42a5b0, 0x2f4573, 0x5452b0, 0x3ca9a8, 0x60e950, 0x4c6aa0,
        0x36aea6, 0x5aab50, 0x464b60, 0x30aae4, 0x56a570, 0x405260, 0x28f263, 0x4ed940, 0x38db47, 0x5cd6a0,
        0x4896d0, 0x344dd5, 0x5a4ad0, 0x42a4d0, 0x2cd4b4, 0x52b250, 0x3cd558, 0x60b540, 0x4ab5a0, 0x3755a6,
        0x5c95b0, 0x4649b0, 0x30a974, 0x56a4b0, 0x40aa50, 0x29aa52, 0x4e6d20, 0x39ad47, 0x5eab60, 0x489370,
        0x344af5, 0x5a4970, 0x4464b0, 0x2c74a3, 0x50ea50, 0x3d6a58, 0x6256a0, 0x4aaad0, 0x3696d5, 0x5c92e0
      ), /* Years 1900-1999 */
      TK21 = new Array(
        0x46c960, 0x2ed954, 0x54d4a0, 0x3eda50, 0x2a7552, 0x4e56a0, 0x38a7a7, 0x5ea5d0, 0x4a92b0, 0x32aab5,
        0x58a950, 0x42b4a0, 0x2cbaa4, 0x50ad50, 0x3c55d9, 0x624ba0, 0x4ca5b0, 0x375176, 0x5c5270, 0x466930,
        0x307934, 0x546aa0, 0x3ead50, 0x2a5b52, 0x504b60, 0x38a6e6, 0x5ea4e0, 0x48d260, 0x32ea65, 0x56d520,
        0x40daa0, 0x2d56a3, 0x5256d0, 0x3c4afb, 0x6249d0, 0x4ca4d0, 0x37d0b6, 0x5ab250, 0x44b520, 0x2edd25,
        0x54b5a0, 0x3e55d0, 0x2a55b2, 0x5049b0, 0x3aa577, 0x5ea4b0, 0x48aa50, 0x33b255, 0x586d20, 0x40ad60,
        0x2d4b63, 0x525370, 0x3e49e8, 0x60c970, 0x4c54b0, 0x3768a6, 0x5ada50, 0x445aa0, 0x2fa6a4, 0x54aad0,
        0x4052e0, 0x28d2e3, 0x4ec950, 0x38d557, 0x5ed4a0, 0x46d950, 0x325d55, 0x5856a0, 0x42a6d0, 0x2c55d4,
        0x5252b0, 0x3ca9b8, 0x62a930, 0x4ab490, 0x34b6a6, 0x5aad50, 0x4655a0, 0x2eab64, 0x54a570, 0x4052b0,
        0x2ab173, 0x4e6930, 0x386b37, 0x5e6aa0, 0x48ad50, 0x332ad5, 0x582b60, 0x42a570, 0x2e52e4, 0x50d160,
        0x3ae958, 0x60d520, 0x4ada90, 0x355aa6, 0x5a56d0, 0x462ae0, 0x30a9d4, 0x54a2d0, 0x3ed150, 0x28e952
      ), /* Years 2000-2099 */
      TK22 = new Array(
        0x4eb520, 0x38d727, 0x5eada0, 0x4a55b0, 0x362db5, 0x5a45b0, 0x44a2b0, 0x2eb2b4, 0x54a950, 0x3cb559,
        0x626b20, 0x4cad50, 0x385766, 0x5c5370, 0x484570, 0x326574, 0x5852b0, 0x406950, 0x2a7953, 0x505aa0,
        0x3baaa7, 0x5ea6d0, 0x4a4ae0, 0x35a2e5, 0x5aa550, 0x42d2a0, 0x2de2a4, 0x52d550, 0x3e5abb, 0x6256a0,
        0x4c96d0, 0x3949b6, 0x5e4ab0, 0x46a8d0, 0x30d4b5, 0x56b290, 0x40b550, 0x2a6d52, 0x504da0, 0x3b9567,
        0x609570, 0x4a49b0, 0x34a975, 0x5a64b0, 0x446a90, 0x2cba94, 0x526b50, 0x3e2b60, 0x28ab61, 0x4c9570,
        0x384ae6, 0x5cd160, 0x46e4a0, 0x2eed25, 0x54da90, 0x405b50, 0x2c36d3, 0x502ae0, 0x3a93d7, 0x6092d0,
        0x4ac950, 0x32d556, 0x58b4a0, 0x42b690, 0x2e5d94, 0x5255b0, 0x3e25fa, 0x6425b0, 0x4e92b0, 0x36aab6,
        0x5c6950, 0x4674a0, 0x31b2a5, 0x54ad50, 0x4055a0, 0x2aab73, 0x522570, 0x3a5377, 0x6052b0, 0x4a6950,
        0x346d56, 0x585aa0, 0x42ab50, 0x2e56d4, 0x544ae0, 0x3ca570, 0x2864d2, 0x4cd260, 0x36eaa6, 0x5ad550,
        0x465aa0, 0x30ada5, 0x5695d0, 0x404ad0, 0x2aa9b3, 0x50a4d0, 0x3ad2b7, 0x5eb250, 0x48b540, 0x33d556
      ), /* Years 2100-2199 */
      CAN = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'],
      CHI = ['Tý', 'Sửu', 'Dần', 'Mẹo', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'],
      TUAN = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'],
      GIO_HD = ['110100101100', '001101001011', '110011010010', '101100110100', '001011001101', '010010110011'],
      TIETKHI = ['Xuân phân', 'Thanh minh', 'Cốc vũ', 'Lập hạ', 'Tiểu mãn', 'Mang chủng',
        'Hạ chí', 'Tiểu thử', 'Đại thử', 'Lập thu', 'Xử thử', 'Bạch lộ',
        'Thu phân', 'Hàn lộ', 'Sương giáng', 'Lập đông', 'Tiểu tuyết', 'Đại tuyết',
        'Đông chí', 'Tiểu hàn', 'Đại hàn', 'Lập xuân', 'Vũ thủy', 'Kinh trập'
      ],
      THANG = ['Một', 'Hai', 'Ba', 'Bốn', 'Năm', 'Sáu', 'Bảy', 'Tám', 'Chín', 'Mười', 'Mười một', 'Mười hai'],
      DAYNAMES = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
      LE = {
        solar: [
          { d:  1, m:  1, i: 'Tết Dương lịch' },
          { d:  9, m:  1, i: 'Ngày Học sinh - Sinh viên Việt Nam' },
          { d:  3, m:  2, i: 'Ngày thành lập Đảng Cộng sản Việt Nam' },
          { d: 27, m:  2, i: 'Ngày Thầy thuốc Việt Nam' },
          { d:  8, m:  3, i: 'Ngày Quốc tế Phụ nữ' },
          { d: 26, m:  3, i: 'Ngày thành lập Đoàn Thanh niên Cộng sản Hồ Chí Minh' },
          { d: 21, m:  4, i: 'Ngày Sách Việt Nam' },
          { d: 30, m:  4, i: 'Ngày Thống nhất đất nước' },
          { d:  1, m:  5, i: 'Ngày Quốc tế Lao động' },
          { d: 15, m:  5, i: 'Ngày thành lập Đội Thiếu niên Tiền phong Hồ Chí Minh' },
          { d: 19, m:  5, i: 'Ngày sinh của Chủ tịch Hồ Chí Minh' },
          { d:  1, m:  6, i: 'Ngày Quốc tế Thiếu nhi' },
          { d:  5, m:  6, i: 'Ngày Bác Hồ ra đi tìm đường cứu nước' },
          { d: 27, m:  7, i: 'Ngày Thương binh Liệt sĩ' },
          { d: 19, m:  8, i: 'Ngày Cách mạng tháng Tám thành công' },
          { d:  2, m:  9, i: 'Ngày Quốc khánh' },
          { d: 13, m: 10, i: 'Ngày Doanh nhân Việt Nam' },
          { d: 20, m: 10, i: 'Ngày thành lập Hội Phụ nữ Việt Nam' },
          { d: 20, m: 11, i: 'Ngày Nhà giáo Việt Nam' },
          { d: 22, m: 12, i: 'Ngày thành lập Quân đội Nhân dân Việt Nam' },
          { d: 24, m: 12, i: 'Ngày Lễ Giáng Sinh' }
        ],
        lunar: [
          { d:  1, m:  1, i: 'Tết Nguyên Đán' },
          { d: 15, m:  1, i: 'Tết Nguyên tiêu' },
          { d:  3, m:  3, i: 'Tết Hàn thực' },
          { d: 10, m:  3, i: 'Giỗ Tổ Hùng Vương' },
          { d: 15, m:  4, i: 'Lễ Phật Đản' },
          { d:  5, m:  5, i: 'Tết Đoan ngọ' },
          { d: 15, m:  7, i: 'Vu Lan' },
          { d: 15, m:  8, i: 'Tết Trung thu' },
          { d: 23, m: 12, i: 'Ông Táo chầu trời' }
        ]
      },
      FIRST_DAY = jdn(31, 1, 1200),
      LAST_DAY = jdn(31, 12, 2199),
      PI = Math.PI,
      today = new Date(),
      currentLunarDate = getLunarDate(today.getDate(), today.getMonth()+1, today.getFullYear()),
      currentMonth = today.getMonth()+1,
      currentYear = today.getFullYear();

  /* Create lunar date object, stores (lunar) date, month, year, leap month indicator, and Julian date number */
  function LunarDate(dd, mm, yy, leap, jd) {
    this.day = dd;
    this.month = mm;
    this.year = yy;
    this.leap = leap;
    this.jd = jd;
  }

  function INT(d) {
    return Math.floor(d);
  }

  function jdn(dd, mm, yy) {
    var a = INT((14 - mm) / 12);
    var y = yy+4800-a;
    var m = mm+12*a-3;
    var jd = dd + INT((153*m+2)/5) + 365*y + INT(y/4) - INT(y/100) + INT(y/400) - 32045;
    return jd;
    //return 367*yy - INT(7*(yy+INT((mm+9)/12))/4) - INT(3*(INT((yy+(mm-9)/7)/100)+1)/4) + INT(275*mm/9)+dd+1721029;
  }

  function jdn2date(jd) {
    var Z, A, alpha, B, C, D, E, dd, mm, yyyy, F;
    Z = jd;
    if (Z < 2299161) {
      A = Z;
    } else {
      alpha = INT((Z-1867216.25)/36524.25);
      A = Z + 1 + alpha - INT(alpha/4);
    }
    B = A + 1524;
    C = INT( (B-122.1)/365.25);
    D = INT( 365.25*C );
    E = INT( (B-D)/30.6001 );
    dd = INT(B - D - INT(30.6001*E));
    if (E < 14) {
      mm = E - 1;
    } else {
      mm = E - 13;
    }
    if (mm < 3) {
      yyyy = C - 4715;
    } else {
      yyyy = C - 4716;
    }
    return new Array(dd, mm, yyyy);
  }

  function decodeLunarYear(yy, k) {
    var monthLengths, regularMonths, offsetOfTet, leapMonth, leapMonthLength, solarNY, currentJD, j, mm;
    var ly = new Array();
    monthLengths = new Array(29, 30);
    regularMonths = new Array(12);
    offsetOfTet = k >> 17;
    leapMonth = k & 0xf;
    leapMonthLength = monthLengths[k >> 16 & 0x1];
    solarNY = jdn(1, 1, yy);
    currentJD = solarNY+offsetOfTet;
    j = k >> 4;
    for(i = 0; i < 12; i++) {
      regularMonths[12 - i - 1] = monthLengths[j & 0x1];
      j >>= 1;
    }
    if (leapMonth == 0) {
      for(mm = 1; mm <= 12; mm++) {
        ly.push(new LunarDate(1, mm, yy, 0, currentJD));
        currentJD += regularMonths[mm-1];
      }
    } else {
      for(mm = 1; mm <= leapMonth; mm++) {
        ly.push(new LunarDate(1, mm, yy, 0, currentJD));
        currentJD += regularMonths[mm-1];
      }
      ly.push(new LunarDate(1, leapMonth, yy, 1, currentJD));
      currentJD += leapMonthLength;
      for(mm = leapMonth+1; mm <= 12; mm++) {
        ly.push(new LunarDate(1, mm, yy, 0, currentJD));
        currentJD += regularMonths[mm-1];
      }
    }
    return ly;
  }

  function getYearInfo(yyyy) {
    var yearCode;
    if (yyyy < 1300) {
      yearCode = TK13[yyyy - 1200];
    } else if (yyyy < 1400) {
      yearCode = TK14[yyyy - 1300];
    } else if (yyyy < 1500) {
      yearCode = TK15[yyyy - 1400];
    } else if (yyyy < 1600) {
      yearCode = TK16[yyyy - 1500];
    } else if (yyyy < 1700) {
      yearCode = TK17[yyyy - 1600];
    } else if (yyyy < 1800) {
      yearCode = TK18[yyyy - 1700];
    } else if (yyyy < 1900) {
      yearCode = TK19[yyyy - 1800];
    } else if (yyyy < 2000) {
      yearCode = TK20[yyyy - 1900];
    } else if (yyyy < 2100) {
      yearCode = TK21[yyyy - 2000];
    } else {
      yearCode = TK22[yyyy - 2100];
    }
    return decodeLunarYear(yyyy, yearCode);
  }

  function findLunarDate(jd, ly) {
    if (jd > LAST_DAY || jd < FIRST_DAY || ly[0].jd > jd) {
      return new LunarDate(0, 0, 0, 0, jd);
    }
    var i = ly.length-1;
    while (jd < ly[i].jd) {
      i--;
    }
    var off = jd - ly[i].jd;
    ret = new LunarDate(ly[i].day+off, ly[i].month, ly[i].year, ly[i].leap, jd);
    return ret;
  }

  function getLunarDate(dd, mm, yyyy) {
    var ly, jd;
    if (yyyy < 1300 || 2199 < yyyy) {
      //return new LunarDate(0, 0, 0, 0, 0);
    }
    ly = getYearInfo(yyyy);
    jd = jdn(dd, mm, yyyy);
    if (jd < ly[0].jd) {
      ly = getYearInfo(yyyy - 1);
    }
    return findLunarDate(jd, ly);
  }

  function getMonth(mm, yy) {
    var ly1, ly2, tet1, jd1, jd2, mm1, yy1, result, i;
    if (mm < 12) {
      mm1 = mm + 1;
      yy1 = yy;
    } else {
      mm1 = 1;
      yy1 = yy + 1;
    }
    jd1 = jdn(1, mm, yy);
    jd2 = jdn(1, mm1, yy1);
    ly1 = getYearInfo(yy);
    tet1 = ly1[0].jd;
    result = new Array();
    if (tet1 <= jd1) { /* tet(yy) = tet1 < jd1 < jd2 <= 1.1.(yy+1) < tet(yy+1) */
      for (i = jd1; i < jd2; i++) {
        result.push(findLunarDate(i, ly1));
      }
    } else if (jd1 < tet1 && jd2 < tet1) { /* tet(yy-1) < jd1 < jd2 < tet1 = tet(yy) */
      ly1 = getYearInfo(yy - 1);
      for (i = jd1; i < jd2; i++) {
        result.push(findLunarDate(i, ly1));
      }
    } else if (jd1 < tet1 && tet1 <= jd2) { /* tet(yy-1) < jd1 < tet1 <= jd2 < tet(yy+1) */
      ly2 = getYearInfo(yy - 1);
      for (i = jd1; i < tet1; i++) {
        result.push(findLunarDate(i, ly2));
      }
      for (i = tet1; i < jd2; i++) {
        result.push(findLunarDate(i, ly1));
      }
    }
    return result;
  }

  function getDayName(lunarDate) {
    if (lunarDate.day == 0) {
      return "";
    }
    var cc = getCanChi(lunarDate);
    var s = "Ngày " + cc[0] +", tháng "+cc[1] + ", năm " + cc[2];
    return s;
  }

  function getYearCanChi(year) {
    return CAN[(year+6) % 10] + " " + CHI[(year+8) % 12];
  }

  function getCanChi(lunar) {
    var dayName, monthName, yearName;
    dayName = CAN[(lunar.jd + 9) % 10] + " " + CHI[(lunar.jd+1)%12];
    monthName = CAN[(lunar.year*12+lunar.month+3) % 10] + " " + CHI[(lunar.month+1)%12];
    if (lunar.leap == 1) {
      monthName += " (N)";
    }
    yearName = getYearCanChi(lunar.year);
    return new Array(dayName, monthName, yearName);
  }

  function getDayString(lunar, solarDay, solarMonth, solarYear) {
    var s;
    var dayOfWeek = TUAN[(lunar.jd + 1) % 7];
    s = dayOfWeek + " " + solarDay + "/" + solarMonth + "/" + solarYear;
    s += " (";
    s = s + "Ngày " + lunar.day+" tháng "+lunar.month;
    if (lunar.leap == 1) {
      s = s + " nhuận";
    }
    return s;
  }

  function getTodayString() {
    var s = getDayString(currentLunarDate, today.getDate(), today.getMonth()+1, today.getFullYear());
    s += " năm " + getYearCanChi(currentLunarDate.year) + ')';
    return s;
  }

  function getPhatLich(ld, lm, ly) {
    ld = (ld == null ? currentLunarDate.day : ld);
    lm = (lm == null ? currentLunarDate.month : lm);
    ly = (ly == null ? currentLunarDate.year : ly);
    return ( lm > 4 || (lm >= 4 && ld >= 15) ? ly + 544 : (ly + 544) - 1);
  }

  function getDateString(dd, MM, yyyy) {
    var InputLunarDate = getLunarDate(dd, MM, yyyy);
    var s;
    var dayOfWeek = TUAN[(InputLunarDate.jd + 1) % 7];
    s = dayOfWeek + ", " + dd + "/" + MM + "/" + yyyy;
    s += " (";
    s = s + InputLunarDate.day+"/"+InputLunarDate.month;
    if (InputLunarDate.leap == 1) {
      s = s + "N";
    }
    s += "/" + getYearCanChi(InputLunarDate.year) + ")";
    return s;
  }

  function getCurrentTime() {
    today = new Date();
    var Std = today.getHours();
    var Min = today.getMinutes();
    var Sec = today.getSeconds();
    var s1  = ((Std < 10) ? "0" + Std : Std);
    var s2  = ((Min < 10) ? "0" + Min : Min);
    //var s3  = ((Sec < 10) ? "0" + Sec : Sec);
    //return s1 + ":" + s2 + ":" + s3;
    return s1 + ":" + s2;
  }

  function getGioHoangDao(jd) {
    var chiOfDay = (jd+1) % 12;
    var gioHD = GIO_HD[chiOfDay % 6]; // same values for Ty' (1) and Ngo. (6), for Suu and Mui etc.
    var ret = "";
    var count = 0;
    for (var i = 0; i < 12; i++) {
      if (gioHD.charAt(i) == '1') {
        ret += CHI[i];
        ret += ' ('+(i*2+23)%24+'-'+(i*2+1)%24+')';
        if (count++ < 5) ret += ', ';
        if (count == 3) ret += '\n';
      }
    }
    return ret;
  }

  function SunLongitude(jdn) {
    var T, T2, dr, M, L0, DL, lambda, theta, omega;
    T = (jdn - 2451545.0) / 36525; // Time in Julian centuries from 2000-01-01 12:00:00 GMT
    T2 = T * T;
    dr = PI / 180; // degree to radian
    M = 357.52910 + 35999.05030 * T - 0.0001559 * T2 - 0.00000048 * T * T2; // mean anomaly, degree
    L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2; // mean longitude, degree
    DL = (1.914600 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M);
    DL = DL + (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.000290 * Math.sin(dr * 3 * M);
    theta = L0 + DL; // true longitude, degree
    // obtain apparent longitude by correcting for nutation and aberration
    omega = 125.04 - 1934.136 * T;
    lambda = theta - 0.00569 - 0.00478 * Math.sin(omega * dr);
    // Convert to radians
    lambda = lambda * dr;
    lambda = lambda - PI * 2 * (INT(lambda / (PI * 2))); // Normalize to (0, 2*PI)
    return lambda;
  }

  function getSunLongitude(dayNumber, timeZone) {
    return INT(SunLongitude(dayNumber - 0.5 - timeZone / 24.0) / PI * 12);
  }

  function getCanHour0(jdn) {
    return CAN[(jdn - 1) * 2 % 10];
  }

  function printMonth(mm, yy) {
    var res = "";
    res += printTable(mm, yy);
    return res;
  }

  function printYear(yy) {
    var yearName = "Năm " + getYearCanChi(yy) + " " + yy;
    var res = "";
    res += '<table align="center">\n';
    res += '<tbody>\n';
    res += '<tr>\n';
    res += '  <td colspan="3" class="amlich-tennam" onClick="showYearSelect();">'+yearName+'</td>\n';
    res += '</tr>\n';
    for (var i = 1; i<= 12; i++) {
      if (i % 3 == 1) res += '<tr>\n';
      res += '<td>\n';
      res += printTable(i, yy);
      res += '</td>\n';
      if (i % 3 == 0) res += '</tr>\n';
    }
    res += '</tbody>\n';
    res += '</table>\n';
    return res;
  }

  function printTable(mm, yy) {
    var i, j, k, solar, lunar, cellClass, solarClass, lunarClass;
    var currentMonth = getMonth(mm, yy);
    if (currentMonth.length == 0) return false;
    var ld1 = currentMonth[0];
    var emptyCells = (ld1.jd + 1) % 7;
    var MonthHead = mm + "/" + yy;
    var LunarHead = getYearCanChi(ld1.year);
    var res = "";
    res += '<table class="amlich" border="0" cellpadding="0" cellspacing="0" width="'+settings.tableWidth+'">\n';
    res += '<tbody>\n';
    res += printHead(mm, yy);
    for (i = 0; i < 6; i++) {
      res += '<tr>\n';
      for (j = 0; j < 7; j++) {
        k = 7 * i + j;
        if (k < emptyCells || k >= emptyCells + currentMonth.length) {
          res += '<td class="ngaythang">\n';
          res += '  <div class="cn">&nbsp;</div>\n';
          res += '  <div class="am">&nbsp;</div>\n';
          res += '</td>\n';
        } else {
          solar = k - emptyCells + 1;
          ld1 = currentMonth[k - emptyCells];
          res += printCell(ld1, solar, mm, yy);
        }
      }
      res += '</tr>\n';
    }
    res += '</tbody>\n';
    res += '</table>\n';
    return res;
  }

  function getPrevMonthLink(mm, yy) {
    var mm1 = mm > 1 ? mm-1 : 12;
    var yy1 = mm > 1 ? yy : yy-1;
    return '<a class="prev-month" data-yy="'+yy1+'" data-mm="'+mm1+'" href="#">&nbsp;&lsaquo;&nbsp;</a>';
  }

  function getNextMonthLink(mm, yy) {
    var mm1 = mm < 12 ? mm+1 : 1;
    var yy1 = mm < 12 ? yy : yy+1;
    return '<a class="next-month" data-yy="'+yy1+'" data-mm="'+mm1+'" href="#">&nbsp;&rsaquo;&nbsp;</a>';
  }

  function getPrevYearLink(mm, yy) {
    return '<a class="prev-year" data-yy="'+(yy-1)+'" data-mm="'+mm+'" href="#">&lsaquo;&lsaquo;</a>';
  }

  function getNextYearLink(mm, yy) {
    return '<a class="next-year" data-yy="'+(yy+1)+'" data-mm="'+mm+'" href="#">&rsaquo;&rsaquo;</a>';
  }

  function printHead(mm, yy) {
    var res = "";
    var monthName = mm+"/"+yy;

    switch ( settings.type ) {
      case 'month':
        res += '<tr>\n';
        res += '  <td colspan="2" class="navi-l">'+getPrevYearLink(mm, yy)+' &nbsp;'+getPrevMonthLink(mm, yy)+'</td>\n';
        res += '  <td colspan="3" class="tenthang">'+monthName+'</td>\n';
        res += '  <td colspan="2" class="navi-r">'+getNextMonthLink(mm, yy)+' &nbsp;'+getNextYearLink(mm, yy)+'</td></tr>\n';
        res += '</tr>\n';
        break;
      case 'year':
        res += '<tr>\n';
        res += '  <td colspan="7" class="tenthang">'+monthName+'</td>\n';
        res += '</tr>\n';
        break;
      case 'calendar':
        var cc = getCanChi(currentLunarDate),
            holiday = getHolodayString( today.getDate(), (today.getMonth()+1), currentLunarDate.day, currentLunarDate.month );
        res += '<tr>\n';
        res += '  <td colspan="7">\n';
        res += '    <table class="calendar" border="0" cellpadding="4" cellspacing="0" width="100%">\n';
        res += '      <tbody>\n';
        res += '        <tr>\n';
        res += '          <td colspan="2" class="calendar-month">Tháng '+(today.getMonth()+1)+' Năm '+today.getFullYear()+'</td>\n';
        res += '        </tr>\n';
        res += '        <tr>\n';
        res += '          <td colspan="2" class="calendar-day">\n';
        res += '            <span class="day-num">'+today.getDate()+'</span><br>\n';
        res += '            <span class="day-tuan">'+TUAN[(currentLunarDate.jd + 1) % 7]+'</span>\n';
        res += '          </td>\n';
        res += '        </tr>\n';
        res += '        <tr>\n';
        res += '          <td width="50%" class="calendar-b-left" valign="top">\n';
        res += '            <span class="lunar-month-name">Tháng '+THANG[currentLunarDate.month-1]+'</span><br>\n';
        res += '            <span class="lunar-day-num">'+currentLunarDate.day+'</span><br>\n';
        res += '            <span class="lunar-year-name"><strong>'+cc[2]+'</strong></span>\n';
        res += '          </td>\n';
        res += '          <td width="50%" class="calendar-b-right" valign="top">\n';
        res += '            <span>Ngày <strong>'+cc[0]+'</strong></span><br>\n';
        res += '            <span>Tháng <strong>'+cc[1]+'</strong></span><br>\n';
        res += '            <span>Giờ đầu <strong>'+(getCanHour0(currentLunarDate.jd)+' '+CHI[0])+'</strong></span><br>\n';
        res += '            <span>Tiết <strong>'+TIETKHI[getSunLongitude(currentLunarDate.jd + 1, 7.0)]+'</strong></span><br>\n';
        res += '            <span>PL: <strong>'+getPhatLich()+'</strong></span>\n';
        res += '          </td>\n';
        res += '        </tr>\n';
        res += '        <tr class="calendar-holiday">'+(holiday!='' ? '<td colspan="2">'+holiday+'</td>' : '')+'</tr>\n';
        res += '        <tr>\n';
        res += '          <td colspan="2" class="calendar-hoangdao">Giờ hoàng đạo: '+getGioHoangDao(currentLunarDate.jd)+'</td>\n';
        res += '        </tr>\n';
        res += '      </tbody>\n';
        res += '    </table>\n';
        res += '  </td>\n';
        res += '</tr>\n';
        res += '<tr>\n';
        res += '  <td colspan="2" class="navi-l">'+getPrevYearLink(mm, yy)+' &nbsp;'+getPrevMonthLink(mm, yy)+'</td>\n';
        res += '  <td colspan="3" class="tenthang">'+monthName+'</td>\n';
        res += '  <td colspan="2" class="navi-r">'+getNextMonthLink(mm, yy)+' &nbsp;'+getNextYearLink(mm, yy)+'</td></tr>\n';
        res += '</tr>\n';
        break;
    }
    res += '<tr>\n';
    for(var i=0;i<=6;i++) {
      res += '  <td class="ngaytuan">'+DAYNAMES[i]+'</td>\n';
    }
    res += '</tr>\n';
    return res;
  }

  function checkHolidaySolar( dd, mm ) {
    var res = '';
    $.each( LE.solar, function( k, item ) {
      if ( item.d == dd && item.m == mm ) {
        res = item.i+' ('+item.d+'/'+item.m+' DL)';
        return false;
      }
    });
    return res;
  }

  function checkHolidayLunar( dd, mm ) {
    var res = '';
    $.each( LE.lunar, function( k, item ) {
      if ( item.d == dd && item.m == mm ) {
        res = item.i+' ('+item.d+'/'+item.m+' ÂL)';
        return false;
      }
    });
    return res;
  }

  function getHolodayString( sd, sm, ld, lm ) {
    var tmp = checkHolidayLunar( ld, lm ),
        res = '';
    if ( tmp != '' ) {
      res = tmp;
    }
    tmp = checkHolidaySolar( sd, sm );
    if ( tmp != '' ) {
      res = ( res == '' ? tmp : res+', '+tmp);
    }
    return res;
  }

  function printCell(lunarDate, solarDate, solarMonth, solarYear) {
    var cellClass, solarClass, lunarClass, solarColor,
        cellClass = "ngaythang",
        solarClass = "t2t6",
        lunarClass = "am",
        title = '',
        tmp = '',
        dow = (lunarDate.jd + 1) % 7;
    if (dow == 0) {
      solarClass = "cn";
      solarColor = "red";
    } else if (dow == 6) {
      solarClass = "t7";
      solarColor = "green";
    }
    if (solarDate == today.getDate() && solarMonth == today.getMonth()+1 && solarYear == today.getFullYear()) {
      cellClass = "homnay";
    }
    tmp = checkHolidayLunar( lunarDate.day, lunarDate.month);
    if ( tmp != '' ) {
      cellClass = 'leam';
      title = tmp;
    }
    tmp = checkHolidaySolar( solarDate, solarMonth);
    if ( tmp != '' ) {
      cellClass = 'leduong';
      title = ( title == '' ? tmp : title+', '+tmp);
    }
    title = ( title == '' ? getDayName(lunarDate) : title );
    if (lunarDate.day == 1 && lunarDate.month == 1) {
      cellClass = "tet";
    }
    if (lunarDate.leap == 1) {
      lunarClass = "am2";
    }
    var lunar = lunarDate.day;
    if (solarDate == 1 || lunar == 1) {
      lunar = lunarDate.day + '/' + lunarDate.month + (lunarDate.leap == 1 ? '<sup>N</sup>' : '');
    }
    var res = "";
    var args = lunarDate.day + "," + lunarDate.month + "," + lunarDate.year + "," + lunarDate.leap;
    args += "," + lunarDate.jd + "," + solarDate + "," + solarMonth + "," + solarYear;
    res += '<td class="'+cellClass+'"';
    res += (lunarDate != null ? ' title="'+title+'" data-args="'+args+'"' : '');
    res += '>\n';
    res += '  <div class="'+solarClass+'">'+solarDate+'</div>\n';
    res += '  <div class="'+lunarClass+'">'+lunar+'</div>\n';
    res += '</td>\n';
    return res;
  }

  $.fn.amLich = function( options ) {

    settings = $.extend({
      type: 'month',
      tableWidth: '500px'
    }, options );

    var $this = this;

    $this.on('click', 'td.ngaythang, td.homnay, td.tet, td.leam, td.leduong', function(e) {
      e.preventDefault();
      var data = $(this).attr('data-args');
      if (data === undefined)
        return false;
      var args = data.split(','),
          dd = parseInt(args[0]), mm = parseInt(args[1]), yy = parseInt(args[2]), leap = parseInt(args[3]),
          jd = parseInt(args[4]), sday = parseInt(args[5]), smonth = parseInt(args[6]), syear = parseInt(args[7]),
          lunar = new LunarDate(dd, mm, yy, leap, jd),
          cc = getCanChi(lunar),
          holiday = getHolodayString( sday, smonth, dd, mm );
          s = '';
      switch ( settings.type ) {
        case 'year':
        case 'month':
          s += '◊ ' + getDayString(lunar, sday, smonth, syear) + ' âm lịch)\n';
          s += '◊ Ngày '+cc[0]+', tháng '+cc[1]+', năm '+cc[2]+'\n';
          s += '◊ Giờ đầu ngày '+(getCanHour0(jd)+' '+CHI[0])+'\n';
          s += '◊ Tiết '+TIETKHI[getSunLongitude(jd + 1, 7.0)]+'\n';
          s += '◊ Giờ hoàng đạo: ' + getGioHoangDao(jd) + '\n';
          s += '◊ PL: ' + getPhatLich(dd, mm, yy) + '\n';
          s += ( holiday != '' ? '◊ '+holiday : '' );
          alert(s);
          break;
        case 'calendar':
          $this.find('.calendar .calendar-month').html('Tháng '+smonth+' Năm '+syear);
          $this.find('.calendar .calendar-day .day-num').html(sday);
          $this.find('.calendar .calendar-day .day-tuan').html(TUAN[(jd + 1) % 7]);
          $this.find('.calendar .lunar-day-num').html(dd);
          $this.find('.calendar .lunar-month-name').html('Tháng '+THANG[mm-1]+(leap == 1 ? ' (N)' : ''));
          $this.find('.calendar .lunar-year-name').html('<strong>'+cc[2]+'</strong>');
          $this.find('.calendar .calendar-holiday').html((holiday!='' ? '<td colspan="2">'+holiday+'</td>' : ''));
          $this.find('.calendar .calendar-hoangdao').html('Giờ hoàng đạo: '+getGioHoangDao(jd));
          s += '<span>Ngày <strong>'+cc[0]+'</strong></span><br>\n';
          s += '<span>Tháng <strong>'+cc[1]+'</strong></span><br>\n';
          s += '<span>Giờ đầu <strong>'+(getCanHour0(jd)+' '+CHI[0])+'</strong></span><br>\n';
          s += '<span>Tiết <strong>'+TIETKHI[getSunLongitude(jd + 1, 7.0)]+'</strong></span><br>';
          s += '<span>PL: <strong>'+getPhatLich(dd, mm, yy)+'</strong></span>\n';
          $this.find('.calendar .calendar-b-right').html(s);
          break;
      }
    });

    $this.on('click', 'a.prev-year, a.prev-month, a.next-month, a.next-year', function(e) {
      e.preventDefault();
      var yy = $(this).data('yy'),
          mm = $(this).data('mm');
      return $this.html( printMonth(mm, yy) );
    });

    $this.on('click', 'td.ngaytuan', function(e) {
      e.preventDefault();
      //alert(ABOUT);
    });

    switch ( settings.type ) {
      case 'month':
        return $this.html( printMonth(currentMonth, currentYear) );
        break;
      case 'year':
        return $this.html( printYear(currentYear) );
        break;
      case 'calendar':
        return $this.html( printMonth(currentMonth, currentYear) );
        break;
      case 'text':
        return $this.html( getTodayString() );
        break;
      default:
        break;
    }

  };

})( jQuery );
