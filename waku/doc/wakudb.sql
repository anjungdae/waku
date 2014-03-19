-- 사용자
DROP TABLE IF EXISTS `USER` RESTRICT;

-- 아이템
DROP TABLE IF EXISTS `ITEM` RESTRICT;

-- 쿠폰아이템
DROP TABLE IF EXISTS `ELEMENT` RESTRICT;

-- 소지아이템취득내역
DROP TABLE IF EXISTS `MYITEM` RESTRICT;

-- 만보기정보
DROP TABLE IF EXISTS `PACE` RESTRICT;

-- 기업정보
DROP TABLE IF EXISTS `COMPANY` RESTRICT;

-- 쿠폰바코드
DROP TABLE IF EXISTS `BARCODE` RESTRICT;

-- 내쿠폰
DROP TABLE IF EXISTS `MYCOUPON` RESTRICT;

-- 도장찍기
DROP TABLE IF EXISTS `STAMP` RESTRICT;

-- 물품정보
DROP TABLE IF EXISTS `GOODS` RESTRICT;

-- 사용자
CREATE TABLE `USER` (
  `U_NO`       INTEGER     NOT NULL COMMENT '사용자번호', -- 사용자번호
  `U_EMAIL`    VARCHAR(40) NOT NULL COMMENT '사용자이메일', -- 사용자이메일
  `U_PASSWORD` VARCHAR(20) NOT NULL COMMENT '사용자비밀번호', -- 사용자비밀번호
  `U_W_TOTAL`  INTEGER     NOT NULL DEFAULT 0 COMMENT '누적걸음수' -- 누적걸음수
)
COMMENT '사용자';

-- 사용자
ALTER TABLE `USER`
  ADD CONSTRAINT `PK_USER` -- 사용자 기본키
    PRIMARY KEY (
      `U_NO` -- 사용자번호
    );

-- 사용자 유니크 인덱스
CREATE UNIQUE INDEX `UIX_USER`
  ON `USER` ( -- 사용자
    `U_EMAIL` ASC -- 사용자이메일
  );

-- 아이템
CREATE TABLE `ITEM` (
  `I_NO`    INTEGER      NOT NULL COMMENT '아이템번호', -- 아이템번호
  `I_NAME`  VARCHAR(50)  NOT NULL COMMENT '아이템이름', -- 아이템이름
  `I_IMAGE` VARCHAR(255) NOT NULL COMMENT '아이템그림', -- 아이템그림
  `I_CLASS` VARCHAR(50)  NOT NULL COMMENT '아이템유형', -- 아이템유형
  `I_PRICE` INTEGER      NOT NULL DEFAULT 0 COMMENT '필요걸음수', -- 필요걸음수
  `I_SDATE` DATE         NOT NULL COMMENT '등록일' -- 등록일
)
COMMENT '아이템';

-- 아이템
ALTER TABLE `ITEM`
  ADD CONSTRAINT `PK_ITEM` -- 아이템 기본키
    PRIMARY KEY (
      `I_NO` -- 아이템번호
    );

-- 쿠폰아이템
CREATE TABLE `ELEMENT` (
  `G_NO`  INTEGER NOT NULL COMMENT '품목 번호', -- 품목 번호
  `I_NO`  INTEGER NOT NULL COMMENT '필요아이템', -- 필요아이템
  `I_REQ` INTEGER NOT NULL COMMENT '필요수량' -- 필요수량
)
COMMENT '쿠폰아이템';

-- 쿠폰아이템
ALTER TABLE `ELEMENT`
  ADD CONSTRAINT `PK_ELEMENT` -- 쿠폰아이템 기본키
    PRIMARY KEY (
      `G_NO`, -- 품목 번호
      `I_NO`  -- 필요아이템
    );

-- 소지아이템취득내역
CREATE TABLE `MYITEM` (
  `U_NO`    INTEGER NOT NULL COMMENT '사용자번호', -- 사용자번호
  `I_NO`    INTEGER NOT NULL COMMENT '아이템번호', -- 아이템번호
  `I_STOCK` INTEGER NULL     COMMENT '소지수량' -- 소지수량
)
COMMENT '소지아이템취득내역';

-- 소지아이템취득내역
ALTER TABLE `MYITEM`
  ADD CONSTRAINT `PK_MYITEM` -- 소지아이템취득내역 기본키
    PRIMARY KEY (
      `U_NO`, -- 사용자번호
      `I_NO`  -- 아이템번호
    );

-- 만보기정보
CREATE TABLE `PACE` (
  `U_NO`    INTEGER NOT NULL COMMENT '사용자번호', -- 사용자번호
  `W_COUNT` INTEGER NULL     COMMENT '누적걸음수', -- 누적걸음수
  `W_DATE`  DATE    NULL     COMMENT '일자' -- 일자
)
COMMENT '만보기정보';

-- 기업정보
CREATE TABLE `COMPANY` (
  `C_NO`    INTEGER      NOT NULL COMMENT '회사번호', -- 회사번호
  `C_NAME`  VARCHAR(50)  NOT NULL COMMENT '광고주', -- 광고주
  `C_IMAGE` VARCHAR(255) NOT NULL COMMENT '회사마크', -- 회사마크
  `C_PAGE`  VARCHAR(255) NULL     COMMENT '홈페이지', -- 홈페이지
  `C_AD`    VARCHAR(255) NULL     COMMENT '광고URL' -- 광고URL
)
COMMENT '기업정보';

-- 기업정보
ALTER TABLE `COMPANY`
  ADD CONSTRAINT `PK_COMPANY` -- 기업정보 기본키
    PRIMARY KEY (
      `C_NO` -- 회사번호
    );

ALTER TABLE `COMPANY`
  MODIFY COLUMN `C_NO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '회사번호';

ALTER TABLE `COMPANY`
  AUTO_INCREMENT = 1;

-- 쿠폰바코드
CREATE TABLE `BARCODE` (
  `C_SERIAL` INTEGER      NOT NULL COMMENT '쿠폰바코드일련번호', -- 쿠폰바코드일련번호
  `G_NO`     INTEGER      NOT NULL COMMENT '품목 번호', -- 품목 번호
  `C_CODE`   VARCHAR(255) NOT NULL COMMENT '바코드번호' -- 바코드번호
)
COMMENT '쿠폰바코드';

-- 쿠폰바코드
ALTER TABLE `BARCODE`
  ADD CONSTRAINT `PK_BARCODE` -- 쿠폰바코드 기본키
    PRIMARY KEY (
      `C_SERIAL` -- 쿠폰바코드일련번호
    );

-- 내쿠폰
CREATE TABLE `MYCOUPON` (
  `C_SERIAL` INTEGER NOT NULL COMMENT '쿠폰바코드일련번호', -- 쿠폰바코드일련번호
  `U_NO`     INTEGER NULL     COMMENT '사용자번호', -- 사용자번호
  `U_PAY`    INTEGER NOT NULL COMMENT '지불걸음수', -- 지불걸음수
  `C_GDATE`  DATE    NOT NULL COMMENT '취득일', -- 취득일
  `C_STATE`  INTEGER NOT NULL COMMENT '사용상태' -- 사용상태
)
COMMENT '내쿠폰';

-- 내쿠폰
ALTER TABLE `MYCOUPON`
  ADD CONSTRAINT `PK_MYCOUPON` -- 내쿠폰 기본키
    PRIMARY KEY (
      `C_SERIAL` -- 쿠폰바코드일련번호
    );

-- 도장찍기
CREATE TABLE `STAMP` (
  `C_SERIAL`  INTEGER NULL COMMENT '쿠폰바코드일련번호', -- 쿠폰바코드일련번호
  `G_NO`      INTEGER NULL COMMENT '품목 번호', -- 품목 번호
  `I_NO`      INTEGER NULL COMMENT '필요아이템', -- 필요아이템
  `I_DEPOSIT` INTEGER NULL COMMENT '찍은수량' -- 찍은수량
)
COMMENT '도장찍기';

-- 물품정보
CREATE TABLE `GOODS` (
  `G_NO`    INTEGER      NOT NULL COMMENT '품목 번호', -- 품목 번호
  `C_NO`    INTEGER      NOT NULL COMMENT '회사번호', -- 회사번호
  `G_IMAGE` VARCHAR(255) NOT NULL COMMENT '물품 이미지', -- 물품 이미지
  `G_TITLE` VARCHAR(50)  NOT NULL COMMENT '물품 제목', -- 물품 제목
  `G_DESC`  VARCHAR(255) NOT NULL COMMENT '물품 설명', -- 물품 설명
  `G_EDATE` DATE         NOT NULL COMMENT '사용종료일', -- 사용종료일
  `G_VALID` BOOLEAN      NOT NULL DEFAULT true COMMENT '발급가능여부' -- 발급가능여부
)
COMMENT '물품정보';

-- 물품정보
ALTER TABLE `GOODS`
  ADD CONSTRAINT `PK_GOODS` -- 물품정보 기본키
    PRIMARY KEY (
      `G_NO` -- 품목 번호
    );

-- 쿠폰아이템
ALTER TABLE `ELEMENT`
  ADD CONSTRAINT `FK_ITEM_TO_ELEMENT` -- 아이템 -> 쿠폰아이템
    FOREIGN KEY (
      `I_NO` -- 필요아이템
    )
    REFERENCES `ITEM` ( -- 아이템
      `I_NO` -- 아이템번호
    );

-- 쿠폰아이템
ALTER TABLE `ELEMENT`
  ADD CONSTRAINT `FK_GOODS_TO_ELEMENT` -- 물품정보 -> 쿠폰아이템
    FOREIGN KEY (
      `G_NO` -- 품목 번호
    )
    REFERENCES `GOODS` ( -- 물품정보
      `G_NO` -- 품목 번호
    );

-- 소지아이템취득내역
ALTER TABLE `MYITEM`
  ADD CONSTRAINT `FK_USER_TO_MYITEM` -- 사용자 -> 소지아이템취득내역
    FOREIGN KEY (
      `U_NO` -- 사용자번호
    )
    REFERENCES `USER` ( -- 사용자
      `U_NO` -- 사용자번호
    );

-- 소지아이템취득내역
ALTER TABLE `MYITEM`
  ADD CONSTRAINT `FK_ITEM_TO_MYITEM` -- 아이템 -> 소지아이템취득내역
    FOREIGN KEY (
      `I_NO` -- 아이템번호
    )
    REFERENCES `ITEM` ( -- 아이템
      `I_NO` -- 아이템번호
    );

-- 만보기정보
ALTER TABLE `PACE`
  ADD CONSTRAINT `FK_USER_TO_PACE` -- 사용자 -> 만보기정보
    FOREIGN KEY (
      `U_NO` -- 사용자번호
    )
    REFERENCES `USER` ( -- 사용자
      `U_NO` -- 사용자번호
    );

-- 쿠폰바코드
ALTER TABLE `BARCODE`
  ADD CONSTRAINT `FK_GOODS_TO_BARCODE` -- 물품정보 -> 쿠폰바코드
    FOREIGN KEY (
      `G_NO` -- 품목 번호
    )
    REFERENCES `GOODS` ( -- 물품정보
      `G_NO` -- 품목 번호
    );

-- 내쿠폰
ALTER TABLE `MYCOUPON`
  ADD CONSTRAINT `FK_BARCODE_TO_MYCOUPON` -- 쿠폰바코드 -> 내쿠폰
    FOREIGN KEY (
      `C_SERIAL` -- 쿠폰바코드일련번호
    )
    REFERENCES `BARCODE` ( -- 쿠폰바코드
      `C_SERIAL` -- 쿠폰바코드일련번호
    );

-- 내쿠폰
ALTER TABLE `MYCOUPON`
  ADD CONSTRAINT `FK_USER_TO_MYCOUPON` -- 사용자 -> 내쿠폰
    FOREIGN KEY (
      `U_NO` -- 사용자번호
    )
    REFERENCES `USER` ( -- 사용자
      `U_NO` -- 사용자번호
    );

-- 도장찍기
ALTER TABLE `STAMP`
  ADD CONSTRAINT `FK_MYCOUPON_TO_STAMP` -- 내쿠폰 -> 도장찍기
    FOREIGN KEY (
      `C_SERIAL` -- 쿠폰바코드일련번호
    )
    REFERENCES `MYCOUPON` ( -- 내쿠폰
      `C_SERIAL` -- 쿠폰바코드일련번호
    );

-- 도장찍기
ALTER TABLE `STAMP`
  ADD CONSTRAINT `FK_ELEMENT_TO_STAMP` -- 쿠폰아이템 -> 도장찍기
    FOREIGN KEY (
      `G_NO`, -- 품목 번호
      `I_NO`  -- 필요아이템
    )
    REFERENCES `ELEMENT` ( -- 쿠폰아이템
      `G_NO`, -- 품목 번호
      `I_NO`  -- 필요아이템
    );

-- 물품정보
ALTER TABLE `GOODS`
  ADD CONSTRAINT `FK_COMPANY_TO_GOODS` -- 기업정보 -> 물품정보
    FOREIGN KEY (
      `C_NO` -- 회사번호
    )
    REFERENCES `COMPANY` ( -- 기업정보
      `C_NO` -- 회사번호
    );