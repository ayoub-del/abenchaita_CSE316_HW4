USE cse316;
CREATE TABLE classes (
    Subj CHAR(3),
	CRS INTEGER,
    Title VARCHAR(255),
    Cmp CHAR(3),
    Sctn VARCHAR(3),
    Days VARCHAR(4),
    Start_Time VARCHAR(16),
    End_Time VARCHAR(16),
    Mtg_Start_Date VARCHAR(16),
    Mtg_End_Date VARCHAR(16),
    Duration INTEGER,
    Instruction_Mode VARCHAR(16),
    Building VARCHAR(16),
    Room VARCHAR(6),
    Instructor VARCHAR(64), 
    Enrl_Cap INTEGER,
    Wait_Cap INTEGER,
    Cmbnd_Descr VARCHAR(255) DEFAULT NULL,
    Cmbnd_Enrl_Cap VARCHAR(4) DEFAULT NULL,
    PRIMARY KEY (CRS,Sctn)
);
CREATE TABLE saved (
    Subj CHAR(3),
	CRS INTEGER,
    Title VARCHAR(255),
    Cmp CHAR(3),
    Sctn VARCHAR(3),
    Days VARCHAR(4),
    Start_Time VARCHAR(16),
    End_Time VARCHAR(16),
    Mtg_Start_Date VARCHAR(16),
    Mtg_End_Date VARCHAR(16),
    Duration INTEGER,
    Instruction_Mode VARCHAR(16),
    Building VARCHAR(16),
    Room VARCHAR(6),
    Instructor VARCHAR(64), 
    Enrl_Cap INTEGER,
    Wait_Cap INTEGER,
    Cmbnd_Descr VARCHAR(255) DEFAULT NULL,
    Cmbnd_Enrl_Cap VARCHAR(4) DEFAULT NULL,
    PRIMARY KEY (CRS,Sctn)
);
