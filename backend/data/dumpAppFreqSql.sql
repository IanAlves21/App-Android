PGDMP     0                     x            app_freq    12.1    12.1 
    D           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            E           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            F           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            G           1262    16415    app_freq    DATABASE     f   CREATE DATABASE app_freq WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C' LC_CTYPE = 'C';
    DROP DATABASE app_freq;
                postgres    false            �            1259    16448    user_app    TABLE     �   CREATE TABLE public.user_app (
    nome character varying(20),
    email character varying(100) NOT NULL,
    senha character varying(20) NOT NULL,
    cpf character varying(20) NOT NULL,
    matricula character varying(20)
);
    DROP TABLE public.user_app;
       public         heap    postgres    false            �            1259    16453    user_app_checkin    TABLE     �   CREATE TABLE public.user_app_checkin (
    cpf_user character varying(20) NOT NULL,
    entrada timestamp without time zone NOT NULL,
    saida timestamp without time zone NOT NULL
);
 $   DROP TABLE public.user_app_checkin;
       public         heap    postgres    false            @          0    16448    user_app 
   TABLE DATA           F   COPY public.user_app (nome, email, senha, cpf, matricula) FROM stdin;
    public          postgres    false    202   \
       A          0    16453    user_app_checkin 
   TABLE DATA           D   COPY public.user_app_checkin (cpf_user, entrada, saida) FROM stdin;
    public          postgres    false    203   �
       �           2606    16457 &   user_app_checkin user_app_checkin_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.user_app_checkin
    ADD CONSTRAINT user_app_checkin_pkey PRIMARY KEY (cpf_user);
 P   ALTER TABLE ONLY public.user_app_checkin DROP CONSTRAINT user_app_checkin_pkey;
       public            postgres    false    203            �           2606    16452    user_app user_app_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.user_app
    ADD CONSTRAINT user_app_pkey PRIMARY KEY (cpf);
 @   ALTER TABLE ONLY public.user_app DROP CONSTRAINT user_app_pkey;
       public            postgres    false    202            @   O   x�s�/M�I,�L��鹉�9z�����F�&`���̘������L���L�î����$+#?�q�F��@dZ� �5"�      A      x������ � �     