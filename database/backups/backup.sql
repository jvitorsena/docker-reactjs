PGDMP                          z            tarefas    14.2 (Debian 14.2-1.pgdg110+1)    14.2     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                        0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16384    tarefas    DATABASE     [   CREATE DATABASE tarefas WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';
    DROP DATABASE tarefas;
                postgres    false            ?            1259    16391    tarefas    TABLE       CREATE TABLE public.tarefas (
    id integer NOT NULL,
    descricao character varying(255),
    "tiposId" integer DEFAULT 1,
    "isActive" boolean DEFAULT true,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.tarefas;
       public         heap    postgres    false            ?            1259    16387    tarefas_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.tarefas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.tarefas_id_seq;
       public          postgres    false    212                       0    0    tarefas_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.tarefas_id_seq OWNED BY public.tarefas.id;
          public          postgres    false    210            ?            1259    16388    tipos    TABLE     ?   CREATE TABLE public.tipos (
    id integer NOT NULL,
    name character varying(255),
    "isActive" boolean DEFAULT true,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.tipos;
       public         heap    postgres    false            ?            1259    16386    tipos_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.tipos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.tipos_id_seq;
       public          postgres    false    211                       0    0    tipos_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.tipos_id_seq OWNED BY public.tipos.id;
          public          postgres    false    209            f           2604    16395 
   tarefas id    DEFAULT     h   ALTER TABLE ONLY public.tarefas ALTER COLUMN id SET DEFAULT nextval('public.tarefas_id_seq'::regclass);
 9   ALTER TABLE public.tarefas ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    212    212            d           2604    16394    tipos id    DEFAULT     d   ALTER TABLE ONLY public.tipos ALTER COLUMN id SET DEFAULT nextval('public.tipos_id_seq'::regclass);
 7   ALTER TABLE public.tipos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    211    211            ?          0    16391    tarefas 
   TABLE DATA                 public          postgres    false    212   t       ?          0    16388    tipos 
   TABLE DATA                 public          postgres    false    211                     0    0    tarefas_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.tarefas_id_seq', 1, true);
          public          postgres    false    210                       0    0    tipos_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.tipos_id_seq', 1, true);
          public          postgres    false    209            l           2606    16402    tarefas tarefas_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.tarefas
    ADD CONSTRAINT tarefas_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.tarefas DROP CONSTRAINT tarefas_pkey;
       public            postgres    false    212            j           2606    16400    tipos tipos_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.tipos
    ADD CONSTRAINT tipos_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.tipos DROP CONSTRAINT tipos_pkey;
       public            postgres    false    211            m           2606    16403    tarefas tarefas_tiposId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.tarefas
    ADD CONSTRAINT "tarefas_tiposId_fkey" FOREIGN KEY ("tiposId") REFERENCES public.tipos(id) ON UPDATE CASCADE;
 H   ALTER TABLE ONLY public.tarefas DROP CONSTRAINT "tarefas_tiposId_fkey";
       public          postgres    false    3178    212    211            ?   ?   x?}??
?0E?<Ň?J?$Q??)?C?X??=MR?????????9???:???tZUG??C(?ƠMP?*?bȢuk:????}???72??.?韔p??e?????%?{?c?B??l??*?V?z?I?7]M?!?߱<!?>İ25      ?   ?   x???v
Q???W((M??L?+?,?/V??L?Q?K?M?QP?,vL.?,KU???RKRSK@?҂(GS!??'?5XA?PGA? 5/%5?$U]G???h????????????????????????????:~YMk...  +?     