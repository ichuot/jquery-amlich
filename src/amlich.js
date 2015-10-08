/**
 * Copyright 2004 Ho Ngoc Duc [http://come.to/duc]. All Rights Reserved.<p>
 * Permission to use, copy, modify, and redistribute this software and its
 * documentation for personal, non-commercial use is hereby granted provided that
 * this copyright notice appears in all copies.
 */
(function( $ ) {

  var settings = {},
      ABOUT  = 'Âm lịch Việt Nam - Version 0.\n© 2004 Hồ Ngọc Đức [http://www.informatik.uni-leipzig.de/~duc/amlich/]',
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
      ), /* Years 2000-2099 */
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
      'Thu phân', 'H� n lộ', 'Sương giáng', 'Lập đông', 'Tiểu tuyết', 'Đại tuyết',
      'Đông chí', 'Tiểu h� n', 'Đại h� n', 'Lập xuân', 'Vũ thủy', 'Kinh trập'
    ],
    THANG = ['Một', 'Hai', 'Ba', 'Bốn', 'Năm', 'Sáu', 'Bảy', 'Tám', 'Chín', 'Mười', 'Mười một', 'Mười hai'],
    DAYNAMES = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
    LE = {
      solar: [
        { d:  1, m:  1, i: 'Tết Dương lịch' },
        { d:  9, m:  1, i: 'Ng� y Học sinh - Sinh viên Việt Nam' },
        { d:  3, m:  2, i: 'Ng� y th� nh lập Đảng Cộng sản Việt Nam' },
        { d: 27, m:  2, i: 'Ng� y Thầy thuốc Việt Nam' },
        { d:  8, m:  3, i: 'Ng� y Quốc tế Phụ nữ' },
        { d:  8, m:  3, i: 'Ng� y th� nh lập Đo� n Thanh niên Cộng sản Hồ Chí Minh' },
        { d: 26, m:  3, i: 'Ng� y th� nh lập Đo� n Thanh niên Cộng sản Hồ Chí Minh' },
        { d: 21, m:  4, i: 'Ng� y Sách Việt Nam' },
        { d: 30, m:  4, i: 'Ng� y Thống nhất đất nước' },
        { d:  1, m:  5, i: 'Ng� y Quốc tế Lao động' },
        { d: 15, m:  5, i: 'Ng� y th� nh lập Đội Thiếu niên Tiền phong Hồ Chí Minh' },
        { d: 19, m:  5, i: 'Ng� y sinh của Chủ tịch Hồ Chí Minh' },
        { d:  1, m:  6, i: 'Ng� y Quốc tế Thiếu nhi' },
        { d:  5, m:  6, i: 'Ng� y Bác Hồ ra đi tìm đường cứu nước' },
        { d: 27, m:  7, i: 'Ng� y Thương binh Liệt sĩ' },
        { d: 19, m:  8, i: 'Ng� y Cách mạng tháng Tám th� nh công' },
        { d:  2, m:  9, i: 'Ng� y Quốc khánh' },
        { d: 13, m: 10, i: 'Ng� y Doanh nhân Việt Nam' },
        { d: 20, m: 10, i: 'Ng� y th� nh lập Hội Phụ nữ Việt Nam' },
        { d: 20, m: 11, i: 'Ng� y Nh�  giáo Việt Nam' },
        { d: 22, m: 12, i: 'Ng� y th� nh lập Quân đội Nhân dân Việt Nam' },
        { d: 24, m: 12, i: 'Ng� y Lễ Giáng Sinh' }
      ],
      lunar: [
        { d:  1, m:  1, i: 'Tết Nguyên Đán' },
        { d: 15, m:  1, i: 'Tết Nguyên tiêu' },
        { d:  3, m:  3, i: 'Tết H� n thực' },
        { d: 10, m:  3, i: 'Giỗ Tổ Hùng Vương' },
        { d: 15, m:  4, i: 'Lễ Phật Đản' },
        { d:  5, m:  5, i: 'Tết Đoan ngọ' },
        { d: 15, m:  7, i: 'Vu Lan' },
        { d: 15, m:  8, i: 'Tết Trung thu' },
        { d: 23, m: 12, i: 'Ông Táo chầu trời' }
      ]
    },
    FIRST_DAY = jdn(25, 1, 1800), // Tet am lich 1800
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
    if (yyyy < 1900) {
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
    if (yyyy < 1800 || 2199 < yyyy) {
      //return new LunarDate(0, 0, 0, 0, 0);
    }
    ly = getYearInfo(yyyy);
    jd = jdn(dd, mm, yyyy);
    if (jd < ly[0].jd) {
      ly = getYearInfo(yyyy - 1);
    }
    return findLunarDate(jd, ly);
  }

  function parseQuery(q) {
    var ret = new Array();
    if (q.length < 2) return ret;
    var s = q.substring(1, q.length);
    var arr = s.split("&");
    var i, j;
    for (i = 0; i < arr.length; i++) {
      var a = arr[i].split("=");
      for (j = 0; j < a.length; j++) {
        ret.push(a[j]);
      }
    }
    return ret;
  }

  function getSelectedMonth() {
    var query = window.location.search;
    var arr = parseQuery(query);
    var idx;
    for (idx = 0; idx < arr.length; idx++) {
      if (arr[idx] == "mm") {
        currentMonth = parseInt(arr[idx+1]);
      } else if (arr[idx] == "yy") {
        currentYear = parseInt(arr[idx+1]);
      }
    }
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
    var s = "Ng� y " + cc[0] +", tháng "+cc[1] + ", năm " + cc[2];
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
      monthName += " (nhuận)";
    }
    yearName = getYearCanChi(lunar.year);
    return new Array(dayName, monthName, yearName);
  }

  function getDayString(lunar, solarDay, solarMonth, solarYear) {
    var s;
    var dayOfWeek = TUAN[(lunar.jd + 1) % 7];
    s = dayOfWeek + " " + solarDay + "/" + solarMonth + "/" + solarYear;
    s += " (";
    s = s + "Ng� y " + lunar.day+" tháng "+lunar.month;
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

  function getLunarDateString(dd, MM, yyyy, hh, mm, ss) {
    var InputLunarDate = getLunarDate(dd, MM, yyyy);
    var thang;
    if (InputLunarDate.month==1)
      thang = "Giêng";
    else if (InputLunarDate.month==12)
      thang = "Chạp";
    else
      thang = InputLunarDate.month;

    var mydate = new Date(yyyy+'/'+MM+'/'+dd+ ' '+hh+':'+mm+':'+ss);
    var date2552 = new Date("2008/05/19");
    var date2553 = new Date("2009/05/09");
    var date2554 = new Date("2010/05/28");
    var date2555 = new Date("2011/05/17");
    var date2556 = new Date("2012/05/05");
    var date2557 = new Date("2013/05/24");
    var date2558 = new Date("2014/05/13");

    var curHour = mydate.getHours();
    var curMin = mydate.getMinutes();
    var curSec = mydate.getSeconds();
    var curTime =
       ((curHour < 10) ? "0" : "") + curHour + ":"
       + ((curMin < 10) ? "0" : "") + curMin + ":"
       + ((curSec < 10) ? "0" : "") + curSec;

    var s;
    var dayOfWeek = TUAN[(InputLunarDate.jd + 1) % 7];
    s = dayOfWeek + ", " + dd + "/" + MM + "/" + yyyy+",&nbsp;"+curTime+" (GMT+7)";

    s += " &bull; " + InputLunarDate.day+" Tháng "+ thang;
    if (InputLunarDate.leap == 1) {
      s = s + " (Nhuận)";
    }
    s += " Năm " + getYearCanChi(InputLunarDate.year) + " (ÂL)";

      var pl
      if (mydate < date2552)
          pl = "PL.2551";
      else if (mydate < date2553)
          pl = "PL.2552";
      else if (mydate < date2554)
          pl = "PL.2553";
      else if (mydate < date2555)
          pl = "PL.2554";
      else if (mydate < date2556)
          pl = "PL.2555";
      else if (mydate < date2557)
          pl = "PL.2556";
      else if (mydate < date2558)
          pl = "PL.2557";
      else pl = "";

      if (pl!="")
        s += " ● " + pl;

    document.open();
    document.write(s);
    document.close();
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

  function printSelectedMonth() {
    getSelectedMonth();
    return printMonth(currentMonth, currentYear);
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

  function printSelectedYear() {
    getSelectedMonth();
    return printYear(currentYear);
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
    res += '<table class="amlich" border="0" cellpadding="4" cellspacing="0" width="'+settings.tableWidth+'">\n';
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
    return '<a class="prev-month" data-yy="'+yy1+'" data-mm="'+mm1+'" href="#">&lsaquo;</a>';
  }

  function getNextMonthLink(mm, yy) {
    var mm1 = mm < 12 ? mm+1 : 1;
    var yy1 = mm < 12 ? yy : yy+1;
    return '<a class="next-month" data-yy="'+yy1+'" data-mm="'+mm1+'" href="#">&rsaquo;</a>';
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
        res += '            <span>'+TUAN[(currentLunarDate.jd + 1) % 7]+'</span>\n';
        res += '          </td>\n';
        res += '        </tr>\n';
        res += '        <tr>\n';
        res += '          <td width="50%" class="calendar-b-left" valign="top">\n';
        res += '            <span>Tháng '+THANG[currentLunarDate.month-1]+'</span><br>\n';
        res += '            <span class="lunar-day-num">'+currentLunarDate.day+'</span><br>\n';
        res += '            <span>'+cc[2]+'</span>\n';
        res += '          </td>\n';
        res += '          <td width="50%" class="calendar-b-right" valign="top">\n';
        res += '            <span>Ng� y <strong>'+cc[0]+'</strong></span><br>\n';
        res += '            <span>Tháng <strong>'+cc[1]+'</strong></span><br>\n';
        res += '            <span>Năm <strong>'+cc[2]+'</strong></span><br>\n';
        res += '            <span>Giờ đầu <strong>'+(getCanHour0(currentLunarDate.jd)+' '+CHI[0])+'</strong></span><br>\n';
        res += '            <span>Tiết <strong>'+TIETKHI[getSunLongitude(currentLunarDate.jd + 1, 7.0)]+'</strong></span>\n';
        res += '          </td>\n';
        res += '        </tr>\n';
        res +=          (holiday != '' ? '<tr><td colspan="2" class="calendar-holiday">'+holiday+'</td></tr>\n' : '' );
        res += '        <tr>\n';
        res += '          <td colspan="2" class="calendar-hoangdao">Giờ ho� ng đạo: '+getGioHoangDao(currentLunarDate.jd)+'</td>\n';
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
      lunar = lunarDate.day + "/" + lunarDate.month;
    }
    var res = "";
    var args = lunarDate.day + "," + lunarDate.month + "," + lunarDate.year + "," + lunarDate.leap;
    args += ("," + lunarDate.jd + "," + solarDate + "," + solarMonth + "," + solarYear);
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
          holiday = getHolodayString( sday, smonth, dd, mm ),
          s  = '◊ ' + getDayString(lunar, sday, smonth, syear) + ' âm lịch)\n';
          s += '◊ Ng� y '+cc[0]+', tháng '+cc[1]+', năm '+cc[2]+'\n';
          s += '◊ Giờ đầu ng� y '+(getCanHour0(jd)+' '+CHI[0])+'\n';
          s += '◊ Tiết '+TIETKHI[getSunLongitude(jd + 1, 7.0)]+'\n';
          s += '◊ Giờ ho� ng đạo: ' + getGioHoangDao(jd) + '\n';
          s += ( holiday != '' ? '◊ '+holiday : '' );
      alert(s);
    });

    $this.on('click', 'td.ngaytuan', function(e) {
      e.preventDefault();
      //alert(ABOUT);
    });

    switch ( settings.type ) {
      case 'month':
        $this.on('click', 'a.prev-year, a.prev-month, a.next-month, a.next-year', function(e) {
          e.preventDefault();
          var yy = $(this).data('yy'),
              mm = $(this).data('mm');
          return $this.html( printMonth(mm, yy) );
        });
        return $this.html( printSelectedMonth() );
        break;
      case 'year':
        $this.on('click', 'a.prev-year, a.prev-month, a.next-month, a.next-year', function(e) {
          e.preventDefault();
        });
        return $this.html( printSelectedYear() );
        break;
      case 'calendar':
        $this.on('click', 'a.prev-year, a.prev-month, a.next-month, a.next-year', function(e) {
          e.preventDefault();
          var yy = $(this).data('yy'),
              mm = $(this).data('mm');
          return $this.html( printMonth(mm, yy) );
        });
        return $this.html( printSelectedMonth() );
        break;
      case 'text':
        return $this.html( getTodayString() );
        break;
      default:
        break;
    }


  };

})( jQuery );